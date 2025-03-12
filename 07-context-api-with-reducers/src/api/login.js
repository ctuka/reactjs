
const VITE_DUMMY_BASE_URL = import.meta.env.VITE_DUMMY_BASE_URL;



export const login = async (payload) => {
    const settings =  {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    };

    try {
        const response = await fetch(`${VITE_DUMMY_BASE_URL}/login`, settings);
        if (!response.ok) return null;
        const data = await response.json();
        return data;
        
    } catch (error) {
         console.log(error);
         
    }
    
}

