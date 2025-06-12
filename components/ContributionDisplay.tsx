// components/ContributionDisplay.tsx
interface Contribution {
    date: string;
    count: number;
}

interface ContributionDisplayProps {
    contributions: Contribution[];
    username: string;
}

export const ContributionDisplay = ({ contributions, username }: ContributionDisplayProps) => {
    // Calculate some stats
    const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);
    const activeDays = contributions.filter(day => day.count > 0).length;
    const maxContributions = Math.max(...contributions.map(day => day.count));
    
    // Get color based on contribution count (GitHub's green theme)
    const getColor = (count: number) => {
        if (count === 0) return 'bg-gray-100';
        if (count <= 1) return 'bg-green-200';
        if (count <= 3) return 'bg-green-400';
        if (count <= 5) return 'bg-green-600';
        return 'bg-green-800';
    };

    return (
        <div className="mt-8 p-6 border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{username}'s GitHub Contributions</h2>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{totalContributions}</div>
                    <div className="text-sm text-gray-600">Total Contributions</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{activeDays}</div>
                    <div className="text-sm text-gray-600">Active Days</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{maxContributions}</div>
                    <div className="text-sm text-gray-600">Max Daily</div>
                </div>
            </div>

            {/* Contribution Grid (simplified) */}
            <div className="grid grid-cols-52 gap-1 mb-4">
                {contributions.map((day, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-sm ${getColor(day.count)}`}
                        title={`${day.date}: ${day.count} contributions`}
                    />
                ))}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2 text-sm">
                <span>Less</span>
                <div className="w-3 h-3 bg-gray-100 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-200 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-800 rounded-sm"></div>
                <span>More</span>
            </div>
        </div>
    );
};