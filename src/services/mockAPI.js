// Simple mock API for development
const mockUsers = [
  {
    id: 1,
    name: "Demo User",
    email: "demo@example.com",
    password: "password123",
    phone: "+1234567890",
    address: "123 Main St, City, State 12345",
    createdAt: "2024-01-15T10:00:00.000Z"
  }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockAuthAPI = {
  login: async (email, password) => {
    await delay(500); // Simulate network delay
    
    const user = mockUsers.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Invalid email or password');
    }
    
    return user;
  },

  signup: async (userData) => {
    await delay(500);
    
    const existingUser = mockUsers.find(u => u.email === userData.email);
    
    if (existingUser) {
      throw new Error('User already exists with this email');
    }

    const newUser = {
      ...userData,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    
    mockUsers.push(newUser);
    return newUser;
  },

  getUser: async (userId) => {
    await delay(300);
    
    const user = mockUsers.find(u => u.id === userId);
    
    if (!user) {
      throw new Error('User not found');
    }
    
    return user;
  }
};