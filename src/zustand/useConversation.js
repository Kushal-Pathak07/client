import {create} from 'zustand';

const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (conversation) => set({selectedConversation: conversation}),

    // Add messages[] state variables as needed
    messages: [],
    setMessages: (messages) => set({messages: messages}),
}));

export default useConversation;