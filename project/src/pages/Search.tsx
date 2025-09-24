import React, { useState, useMemo } from 'react';
import { Search as SearchIcon, MapPin, DollarSign, Clock, Filter, Heart, ExternalLink } from 'lucide-react';
import { internshipsData, type Internship } from '../data/internships';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    stipendRange: '',
    duration: '',
    type: '',
  });
  const [showFilters, setShowFilters] = useState(false);
  const [savedInternships, setSavedInternships] = useState<string[]>([]);

  const filteredInternships = useMemo(() => {
    return internshipsData.filter((internship) => {
      const matchesSearch = 
        internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        internship.scheme.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLocation = !filters.location || 
        internship.location.toLowerCase().includes(filters.location.toLowerCase());

      const matchesType = !filters.type || internship.type === filters.type;

      const matchesDuration = !filters.duration || 
        internship.duration.includes(filters.duration);

      return matchesSearch && matchesLocation && matchesType && matchesDuration;
    });
  }, [searchTerm, filters]);

  const toggleSaveInternship = (internshipId: string) => {
    setSavedInternships(prev => 
      prev.includes(internshipId)
        ? prev.filter(id => id !== internshipId)
        : [...prev, internshipId]
    );
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Find Your Perfect Internship
          </h1>
          <p className="text-gray-600">
            Discover opportunities from government schemes and private companies
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search internships, companies, or schemes..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <select
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Locations</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Pune">Pune</option>
                    <option value="Hyderabad">Hyderabad</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type
                  </label>
                  <select
                    value={filters.type}
                    onChange={(e) => handleFilterChange('type', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Types</option>
                    <option value="government">Government</option>
                    <option value="private">Private</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Duration
                  </label>
                  <select
                    value={filters.duration}
                    onChange={(e) => handleFilterChange('duration', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Any Duration</option>
                    <option value="3">3 Months</option>
                    <option value="6">6 Months</option>
                    <option value="8">8+ Months</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={() => setFilters({ location: '', stipendRange: '', duration: '', type: '' })}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold">{filteredInternships.length}</span> internships
          </p>
        </div>

        {/* Internship Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredInternships.map((internship) => (
            <InternshipCard
              key={internship.id}
              internship={internship}
              isSaved={savedInternships.includes(internship.id)}
              onToggleSave={() => toggleSaveInternship(internship.id)}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredInternships.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <SearchIcon className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              No internships found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

interface InternshipCardProps {
  internship: Internship;
  isSaved: boolean;
  onToggleSave: () => void;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ internship, isSaved, onToggleSave }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              internship.type === 'government' 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-green-100 text-green-800'
            }`}>
              {internship.type === 'government' ? 'Government' : 'Private'}
            </span>
            {internship.isUrgent && (
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                Urgent
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {internship.title}
          </h3>
          <p className="text-blue-600 font-medium mb-1">{internship.company}</p>
          <p className="text-sm text-gray-600">{internship.scheme}</p>
        </div>
        <button
          onClick={onToggleSave}
          className={`p-2 rounded-full transition-colors ${
            isSaved ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500'
          }`}
        >
          <Heart className={`h-5 w-5 ${isSaved ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>{internship.location}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          <span>{internship.duration}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <DollarSign className="h-4 w-4" />
          <span>{internship.stipend}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {internship.description}
      </p>

      {/* Skills */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {internship.requirements.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {skill}
            </span>
          ))}
          {internship.requirements.length > 3 && (
            <span className="text-xs text-gray-500">
              +{internship.requirements.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-600">
          Deadline: {new Date(internship.deadline).toLocaleDateString()}
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 flex items-center space-x-1">
          <span>Apply Now</span>
          <ExternalLink className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};

export default Search;