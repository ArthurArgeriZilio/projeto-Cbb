export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  price: number;
  category: 'cut' | 'beard' | 'treatment' | 'combo';
}

export interface Staff {
  id: string;
  name: string;
  specialties: string[];
  avatar: string;
  rating: number;
  experience: string;
}

export const services: Service[] = [
  {
    id: 'corte-masculino',
    name: 'Corte Masculino',
    description: 'Corte moderno e personalizado para seu estilo',
    duration: 30,
    price: 25,
    category: 'cut'
  },
  {
    id: 'barba',
    name: 'Barba',
    description: 'Aparar e modelar a barba com precisão',
    duration: 20,
    price: 20,
    category: 'beard'
  },
  {
    id: 'corte-barba',
    name: 'Corte + Barba',
    description: 'Combo completo para um visual impecável',
    duration: 45,
    price: 40,
    category: 'combo'
  },
  {
    id: 'sobrancelha',
    name: 'Sobrancelha',
    description: 'Design e aparar das sobrancelhas',
    duration: 15,
    price: 15,
    category: 'treatment'
  },
  {
    id: 'tratamento-capilar',
    name: 'Tratamento Capilar',
    description: 'Hidratação e cuidados especiais para o cabelo',
    duration: 40,
    price: 35,
    category: 'treatment'
  },
  {
    id: 'barba-completa',
    name: 'Barba Completa',
    description: 'Barba com navalha, loção pós-barba e relaxamento',
    duration: 35,
    price: 30,
    category: 'beard'
  }
];

export const staff: Staff[] = [
  {
    id: 'carlos',
    name: 'Carlos Silva',
    specialties: ['Cortes Clássicos', 'Barbas'],
    avatar: '/avatars/carlos.jpg',
    rating: 4.9,
    experience: '8 anos'
  },
  {
    id: 'rafael',
    name: 'Rafael Santos',
    specialties: ['Cortes Modernos', 'Degradês'],
    avatar: '/avatars/rafael.jpg',
    rating: 4.8,
    experience: '6 anos'
  },
  {
    id: 'miguel',
    name: 'Miguel Costa',
    specialties: ['Barbas', 'Tratamentos'],
    avatar: '/avatars/miguel.jpg',
    rating: 4.9,
    experience: '10 anos'
  }
];

export const businessHours = {
  monday: { open: '09:00', close: '19:00', closed: false },
  tuesday: { open: '09:00', close: '19:00', closed: false },
  wednesday: { open: '09:00', close: '19:00', closed: false },
  thursday: { open: '09:00', close: '19:00', closed: false },
  friday: { open: '09:00', close: '19:00', closed: false },
  saturday: { open: '08:00', close: '17:00', closed: false },
  sunday: { open: '00:00', close: '00:00', closed: true }
};

export const businessInfo = {
  name: 'Elite Barber',
  address: {
    street: 'Rua das Flores, 123',
    neighborhood: 'Centro',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01234-567'
  },
  phone: '(11) 99999-9999',
  email: 'contato@elitebarber.com',
  social: {
    instagram: '@elitebarber',
    facebook: 'Elite Barber SP',
    whatsapp: '5511999999999'
  }
};
