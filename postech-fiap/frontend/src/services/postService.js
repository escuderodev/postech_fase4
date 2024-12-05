import { getToken } from "./authService";
import { URL_BASE, PORT } from "./fetchConfig";

export const listPosts = async () => {
    const requestOptions = {
        method: "GET",
        redirect: "follow",
    };

    try {
        const response = await fetch(
            `${URL_BASE}:${PORT}/posts`,
            requestOptions
        );
        const result = await response.json();
        console.log("O resultado é: ", result);
        return result;
    } catch (error) {
        console.error(error);
    }
};
// export const listPosts = async () => {
//     try {
//         const requestOptions = {
//             method: "GET",
//             redirect: "follow",
//         };
//         const response = await fetch(
//             `${URL_BASE}:${PORT}/posts`,
//             requestOptions
//         );

//         if (!response.ok) {
//             throw new Error("Failed to fetch posts");
//         }
//         const result = await response;
//         return result;
//     } catch (error) {
//         console.error("Error fetching posts:", error);
//         throw error;
//     }
// };
