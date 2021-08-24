import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/api',
});

interface UserRegistration {
    message: string
}

interface UserLogin {
    token: string
}

interface PostCreate {
    message: string
}

interface PostData {
    title: string
    text: string
    imagePath: string
    _id: string
    createdAt: string
    likes: number
}

interface Message {
    message: string
}

export const userApi = {
    registration(email: string, password: string, userName: string): Promise<AxiosResponse<UserRegistration>> {
        return instance.post<UserRegistration>('/users/registration', {email, password, userName})
    },
    login(email: string, password: string): Promise<AxiosResponse<UserLogin>> {
        return instance.post<UserLogin>('/users/login', {email, password})
    }
}

export const postApi = {
    createPost(title: string, text: string, imagePath: string, token: string): Promise<AxiosResponse<PostCreate>> {
        return instance.post('/posts/create', {title, text, imagePath},
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
    },
    getPost(id: string): Promise<AxiosResponse<PostData>> {
        return instance.post<PostData>('/posts/getPost',{_id: id})
    },
    getAllPosts(): Promise<AxiosResponse<Array<PostData>>> {
        return instance.get<Array<PostData>>('/posts/getAllPosts')
    },
    updatePost(title: string, text: string, imagePath: string, id: string, token: string): Promise<AxiosResponse<Message>> {
        return instance.put<Message>('/posts/updatePost', {title, text, imagePath, _id: id},
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
    },
    deletePost(id: string, token: string): Promise<AxiosResponse<Message>> {
        return instance.post('/posts/deletePost', {_id: id},
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
    }

}
