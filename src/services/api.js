// Mock API service for development
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

const mockProducts = [
  {
    id: 1,
    name: "Fresh Apples",
    price: 2.99,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400",
    description: "Crisp and sweet organic apples",
    unit: "kg"
  },
  {
    id: 2,
    name: "Organic Bananas",
    price: 1.99,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400",
    description: "Fresh organic bananas",
    unit: "bunch"
  }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const authAPI = {
  login: async (email, password) => {
    await delay(500);
    
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

export const productsAPI = {
  getProducts: async () => {
    await delay(300);
    return mockProducts;
  },
  
  getProduct: async (id) => {
    await delay(300);
    const product = mockProducts.find(p => p.id === id);
    if (!product) throw new Error('Product not found');
    return product;
  }
};

export default { authAPI, productsAPI };
