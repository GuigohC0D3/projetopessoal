import { useEffect, useState } from "react";

const GITHUB_USERNAME = "GuigohC0D3";

const defaultStats = {
  repos: null,
  commits: null,
  loading: true,
  error: null,
};

export function useGitHubStats() {
  const [stats, setStats] = useState(defaultStats);

  useEffect(() => {
    let cancelled = false;

    async function fetchStats() {
      try {
        const [userRes, commitsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/search/commits?q=author:${GITHUB_USERNAME}&per_page=1`,
            { headers: { Accept: "application/vnd.github.cloak-preview+json" } }
          ),
        ]);

        if (!userRes.ok || !commitsRes.ok) throw new Error("GitHub API error");

        const userData = await userRes.json();
        const commitsData = await commitsRes.json();

        if (!cancelled) {
          setStats({
            repos: userData.public_repos,
            commits: commitsData.total_count,
            loading: false,
            error: null,
          });
        }
      } catch (err) {
        if (!cancelled) {
          setStats((prev) => ({ ...prev, loading: false, error: err.message }));
        }
      }
    }

    fetchStats();
    return () => { cancelled = true; };
  }, []);

  return stats;
}
