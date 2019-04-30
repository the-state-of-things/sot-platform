import axios from 'axios';

const url = '/posts';

/**
 * Post service class for handling posts
 */
class PostService {
    /**
     * Gets posts
     * @return {Promise<string>} Promise with data
     */
    public static getPosts(): Promise<string> {
        return new Promise(async (resolve, reject): Promise<void> => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(data.map((post: any): void => ({
                    ...post,
                    createdAt: new Date(post.createdAt),
                })));
            } catch (err) {
                reject(err);
            }
        });
    }
}

export default PostService;
