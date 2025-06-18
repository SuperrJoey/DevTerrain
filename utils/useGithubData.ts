import { useState } from "react";
import { fetchGitHubContributions } from "./githubApi";
import { parseContributions } from "./contributionParser";

type Contribution = {
    date: string;
    count: number;
};

export const useGitHubData = () => {
    const [loading, setLoading] = useState(false);
    const [contributions, setContributions] = useState<Contribution[]>([]);
    const [error, setError] = useState("");

    const fetchData = async (username: string) => {
        setLoading(true);
        setError("");
        setContributions([]);
        
        try {
            // Add minimum delay to show the loader
            const [data] = await Promise.all([
                (async () => {
                    const raw = await fetchGitHubContributions(username);
                    return parseContributions(raw);
                })(),
                new Promise(resolve => setTimeout(resolve, 5000)) // 2 second minimum delay
            ]);
            
            setContributions(data);
        } catch (error) {
            setError("Failed to fetch data, check username or rate limit");
        } finally {
            setLoading(false);
        }
    };

    return{loading, contributions, error, fetchData};
}