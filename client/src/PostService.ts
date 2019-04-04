import axios from 'axios';

const url = '/posts';

class PostService {
    // Get posts
    public static getPosts(): Promise<string> {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(data.map((post: any) => ({
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
