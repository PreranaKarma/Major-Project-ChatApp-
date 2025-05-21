import Conversation from '../models/conversation.model.js';
import Message from '../models/message.models.js'; 
import { io, getReceiverSocketId } from "../socket/socket.js"; // ✅ adjust path if needed


// export const sendMessage = async (req, res) => {
//   try {
//     const { message } = req.body;
//     const { id: receiverId } = req.params;

//    const senderId = req.user.id || req.user._id;

//     let conversation = await Conversation.findOne({
//       participants: { $all: [senderId, receiverId] },
//     });

//     if (!conversation) {
//       conversation = await Conversation.create({
//         participants: [senderId, receiverId],
//       });
//     }

//     const newMessage = new Message({
//       senderId,
//       receiverId,
//       message,
//     });

//     if (newMessage) {
//       conversation.messages.push(newMessage._id);
//     }

//     console.log(conversation.messages);

//     // Save both in parallel
//     await Promise.all([conversation.save(), newMessage.save()]);

//     //socket io go here
//     const receiverSocketId = getReceiverSocketId(receiverId);
//     if(receiverSocketId) {
//       //io.to(<socket_id>.emit() used to send events to specific client)
//       io.to(receiverSocketId).emit("newMessage", newMessage)
//     }

//     res.status(201).json(newMessage);
//   } catch (error) {
//     console.log("Error in sendMessage controller: ", error.message);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };


export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;

    const senderId = req.user.id || req.user._id;
    if (!senderId || !receiverId) {
      return res.status(400).json({ error: "Sender or receiver ID missing" });
    }

    // 🔍 Find existing conversation or create new
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    // 💬 Create new message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    // ⛓️ Push message ID to conversation
    conversation.messages.push(newMessage._id);

    // 💾 Save both message and conversation
    await Promise.all([conversation.save(), newMessage.save()]);

    // 📡 Emit message to the receiver if online
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.error("❌ Error in sendMessage controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const getMessage = async (req, res) => {

  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user.userId;

    // Find the conversation between the sender and receiver
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    });

    if (!conversation) {
      console.log("No conversation found");
      return res.status(200).json([]); // Return empty if no conversation
    }

    // Log the conversation to check its data
    console.log("Conversation found:", conversation);

    // Populate the messages field
    const populatedConversation = await Conversation.populate(conversation, {
      path: 'messages', // Populate the 'messages' array
      select: 'senderId receiverId message _id createdAt updatedAt', // Fields to return
      strictPopulate: false, // Allow population of fields even if not strictly defined in the schema
    });

    // Log the populated conversation to check if messages are populated
    console.log("Populated Conversation:", populatedConversation);

    // Check if messages exist
    if (!populatedConversation.messages || populatedConversation.messages.length === 0) {
      console.log("No messages found.");
      return res.status(200).json([]);
    }

    // Return the populated messages
    res.status(200).json(populatedConversation.messages);

  } catch (error) {
    console.log("Error in getMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
