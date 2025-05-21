import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import useConversation from '../../zustand/UseConversation';
import UseGetConversations from '../../hooks/UseGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversations } = UseGetConversations();

const handleSubmit = (e) => {
  e.preventDefault();

  if (!search) return;

  if (search.length < 3) {
    return toast.error('Search term must be at least 3 characters long');
  }

  const conversation = conversations.find((c) =>
    c.fullname.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  if (conversation) {
    setSelectedConversation(conversation);
    setSearch('');
  } else {
    toast.error('No such user found!');
  }
};


  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search...."
        className="input input-bordered p-2 mt-2 bg-black text-white rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle rounded-full bg-sky-500 text-white"
      >
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;





