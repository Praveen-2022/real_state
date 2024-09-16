// components/TeamSection.tsx
import Image from 'next/image';

// TypeScript type for a team member
type TeamMember = {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'John Doe',
    role: '7510097395',
    imageUrl: '/interior/2.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Graphic Designer',
    imageUrl: '',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    role: 'Marketing Manager',
    imageUrl: '',
  },
  {
    id: 4,
    name: 'Peter Johnson',
    role: 'SEO Specialist',
    imageUrl: '',
  },
  {
    id: 5,
    name: 'Emily Brown',
    role: 'UX Designer',
    imageUrl: '',
  },
  {
    id: 6,
    name: 'Michael Davis',
    role: 'Frontend Developer',
    imageUrl: '',
  },
  {
    id: 7,
    name: 'Sarah Johnson',
    role: 'Content Writer',
    imageUrl: '',
  },
  {
    id: 8,
    name: 'David Wilson',
    role: 'Project Manager',
    imageUrl: '',
  },
];

const Agents: React.FC = () => {
  return (
    <section id="our-team" className="bg-gray-100 py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Meet Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
              <Image
                src={member.imageUrl}
                alt={`Team Member ${member.name}`}
                width={150}
                height={150}
                className="w-full rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-700">Mobile No.: {member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;
