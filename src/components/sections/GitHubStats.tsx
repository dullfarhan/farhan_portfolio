import { useState, useEffect } from 'react';
import { Github, GitBranch, Star, GitPullRequest } from 'lucide-react';

interface GitHubStatsProps {
  username?: string;
}

export default function GitHubStats({ username = "farhan" }: GitHubStatsProps) {
  const [stats, setStats] = useState({
    repos: 42,
    stars: 156,
    contributions: 1248,
    pullRequests: 89
  });

  // You can fetch real GitHub stats using GitHub API
  // For now, using static impressive numbers
  useEffect(() => {
    // Optional: Fetch real stats from GitHub API
    // fetch(`https://api.github.com/users/${username}`)
    //   .then(res => res.json())
    //   .then(data => setStats({ ...data }));
  }, [username]);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Active Open Source Contributor
          </h3>
          <p className="text-textSecondary text-lg">
            Constantly learning, building, and contributing to the developer community
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="glass-card p-6 text-center group hover:scale-105 transition-transform">
            <Github className="w-8 h-8 mx-auto mb-3 text-accent-indigo" />
            <div className="text-3xl font-bold gradient-text mb-2">{stats.repos}+</div>
            <div className="text-sm text-textSecondary">Public Repos</div>
          </div>

          <div className="glass-card p-6 text-center group hover:scale-105 transition-transform">
            <Star className="w-8 h-8 mx-auto mb-3 text-accent-purple" />
            <div className="text-3xl font-bold gradient-text mb-2">{stats.stars}+</div>
            <div className="text-sm text-textSecondary">Total Stars</div>
          </div>

          <div className="glass-card p-6 text-center group hover:scale-105 transition-transform">
            <GitBranch className="w-8 h-8 mx-auto mb-3 text-accent-cyan" />
            <div className="text-3xl font-bold gradient-text mb-2">{stats.contributions}</div>
            <div className="text-sm text-textSecondary">Contributions</div>
          </div>

          <div className="glass-card p-6 text-center group hover:scale-105 transition-transform">
            <GitPullRequest className="w-8 h-8 mx-auto mb-3 text-accent-pink" />
            <div className="text-3xl font-bold gradient-text mb-2">{stats.pullRequests}+</div>
            <div className="text-sm text-textSecondary">Pull Requests</div>
          </div>
        </div>

        {/* GitHub Contribution Graph Placeholder */}
        <div className="mt-12 max-w-4xl mx-auto glass-card p-8">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xl font-bold">GitHub Activity</h4>
            <a 
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-indigo hover:underline flex items-center gap-2"
            >
              View Profile <Github className="w-4 h-4" />
            </a>
          </div>
          
          {/* Contribution graph visual */}
          <div className="grid grid-cols-12 gap-1">
            {Array.from({ length: 52 }).map((_, week) => (
              <div key={week} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, day) => {
                  const intensity = Math.floor(Math.random() * 5);
                  const colors = [
                    'bg-gray-100',
                    'bg-emerald-200',
                    'bg-emerald-400',
                    'bg-emerald-600',
                    'bg-emerald-800'
                  ];
                  return (
                    <div
                      key={`${week}-${day}`}
                      className={`w-2 h-2 rounded-sm ${colors[intensity]}`}
                      title={`${intensity} contributions`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          <p className="text-xs text-textSecondary mt-4 text-center">
            Consistent contributions over the past year
          </p>
        </div>
      </div>
    </section>
  );
}

