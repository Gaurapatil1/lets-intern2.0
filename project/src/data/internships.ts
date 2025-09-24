export interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  stipend: string;
  type: 'government' | 'private';
  scheme: string;
  description: string;
  requirements: string[];
  deadline: string;
  isUrgent?: boolean;
}

export const internshipsData: Internship[] = [
  {
    id: '1',
    title: 'AI Research Internship',
    company: 'AICTE Innovation Cell',
    location: 'New Delhi',
    duration: '6 months',
    stipend: '₹25,000/month',
    type: 'government',
    scheme: 'AICTE AI Research Program',
    description: 'Work on cutting-edge AI research projects with leading scientists.',
    requirements: ['Machine Learning', 'Python', 'Research Experience'],
    deadline: '2025-02-15',
    isUrgent: true
  },
  {
    id: '2',
    title: 'PM Kaushal Vikas Internship',
    company: 'Ministry of Skill Development',
    location: 'Multiple Cities',
    duration: '3 months',
    stipend: '₹15,000/month',
    type: 'government',
    scheme: 'PM Kaushal Vikas Yojana',
    description: 'Skill development program for emerging technologies.',
    requirements: ['Technical Skills', 'Communication', 'Leadership'],
    deadline: '2025-03-01'
  },
  {
    id: '3',
    title: 'Software Development Intern',
    company: 'TechCorp Solutions',
    location: 'Bangalore',
    duration: '4 months',
    stipend: '₹20,000/month',
    type: 'private',
    scheme: 'Industry Partnership',
    description: 'Full-stack development using modern web technologies.',
    requirements: ['React', 'Node.js', 'Database Management'],
    deadline: '2025-02-28'
  },
  {
    id: '4',
    title: 'Digital India Fellowship',
    company: 'Ministry of Electronics & IT',
    location: 'Pune',
    duration: '8 months',
    stipend: '₹30,000/month',
    type: 'government',
    scheme: 'Digital India Initiative',
    description: 'Transform governance through digital solutions.',
    requirements: ['Web Development', 'Mobile Apps', 'System Design'],
    deadline: '2025-02-20',
    isUrgent: true
  },
  {
    id: '5',
    title: 'Data Analytics Internship',
    company: 'Analytics Pro',
    location: 'Mumbai',
    duration: '5 months',
    stipend: '₹18,000/month',
    type: 'private',
    scheme: 'Industry Collaboration',
    description: 'Work with big data and create insights for business decisions.',
    requirements: ['Python', 'SQL', 'Statistics', 'Data Visualization'],
    deadline: '2025-03-10'
  },
  {
    id: '6',
    title: 'Startup India Mentorship',
    company: 'Department for Promotion of Industry',
    location: 'Hyderabad',
    duration: '6 months',
    stipend: '₹22,000/month',
    type: 'government',
    scheme: 'Startup India Program',
    description: 'Learn entrepreneurship and innovation in startup ecosystem.',
    requirements: ['Business Development', 'Innovation', 'Communication'],
    deadline: '2025-02-25'
  }
];

export const pmSchemes = [
  {
    title: 'PM Internship Scheme 2025',
    description: 'National internship program for students',
    deadline: '2025-02-15'
  },
  {
    title: 'AICTE AI Research Program',
    description: 'AI and Machine Learning research opportunities',
    deadline: '2025-02-20'
  },
  {
    title: 'Digital India Fellowship',
    description: 'Technology innovation in governance',
    deadline: '2025-02-25'
  },
  {
    title: 'Skill India Initiative',
    description: 'Skill development and training program',
    deadline: '2025-03-01'
  }
];