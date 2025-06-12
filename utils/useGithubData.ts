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
        try {
            setLoading(true);
            setError("");
            console.log("Fetching data for user -> ", username);
            const raw = await fetchGitHubContributions(username);
            console.log("Fetched data for username - Dev: ", raw);
            const data = parseContributions(raw);
            console.log("Data : ", data);
            setContributions(data);
        } catch (error) {
            setError("Failed to fetch data, check username or rate limit");
        } finally {
            setLoading(false);
        }
    };

    return{loading, contributions, error, fetchData};
}