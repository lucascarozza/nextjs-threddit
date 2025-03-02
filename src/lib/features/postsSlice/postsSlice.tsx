import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: string;
  subreddit: string;
  title: string;
  selftext: string | null;
  created_utc: number;
  score: number;
  url_overridden_by_dest: string | null;
  num_comments: number;
}

interface ResponseData {
  data: {
    children: { data: Post }[];
  };
}

// Fetch posts from selected subreddit
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (subreddit: string = "popular") => {
    try {
      const response = await fetch(
        // Yes, this is hardcoded and will remain so
        `https://www.reddit.com/r/${subreddit}.json`
      );

      if (!response.ok) {
        throw new Error("Response error");
      }

      const data: ResponseData = await response.json();

      return data.data.children.map((post) => ({
        id: post.data.id,
        subreddit: post.data.subreddit,
        title: post.data.title,
        selftext: post.data.selftext || null,
        created_utc: post.data.created_utc,
        score: post.data.score,  
        url_overridden_by_dest: post.data.url_overridden_by_dest || null,
        num_comments: post.data.num_comments,    
      }));
    } catch (error) {
      console.error("Error fetching subreddits: ", error);
      throw error;
    }
  }
);

// Fetch search results
export const fetchPostsFromSearchResults = createAsyncThunk(
  "posts/fetchPostsFromSearchResults",
  async (term: string) => {
    try {
      const response = await fetch(
        // Yes, this is hardcoded and will remain so
        `https://www.reddit.com/search/.json?q=${term}`
      );

      if (!response.ok) {
        throw new Error("Response error");
      }

      const data: ResponseData = await response.json();

      return data.data.children.map((post) => ({
        id: post.data.id,
        subreddit: post.data.subreddit,
        title: post.data.title,
        selftext: post.data.selftext || null,
        created_utc: post.data.created_utc,
        score: post.data.score,
        url_overridden_by_dest: post.data.url_overridden_by_dest || null,
        num_comments: post.data.num_comments,
      }));  
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error fetching posts: ", error.message);
      } else {
        console.error("An unknown error occurred: ", error);
      }
      throw error;
    }
  }
);

interface PostsState {
  postsList: Post[];
  currentSubreddit: string;
  status: "idle" | "pending" | "success" | "failed";
  error: true | false; 
}

const initialState: PostsState = {
  postsList: [],
  currentSubreddit: "popular",
  status: "idle",
  error: false,
}

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setCurrentSubreddit: (state, action: PayloadAction<string>) => {
      state.currentSubreddit = action.payload;
    }
  },
  extraReducers: (builder) => {
    (builder)
      .addCase(fetchPosts.pending, (state) => {
        state.status = "pending";
        state.error = false;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.postsList = action.payload;
        state.status = "success";
        state.error = false;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "failed";
        state.error = true;
      })
      .addCase(fetchPostsFromSearchResults.pending, (state) => {
        state.status = "pending";
        state.error = false;
      })
      .addCase(fetchPostsFromSearchResults.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.postsList = action.payload;
        state.status = "success";
        state.error = false;
      })
      .addCase(fetchPostsFromSearchResults.rejected, (state) => {
        state.status = "failed";
        state.error = true;
      })
  }
});

export const { setCurrentSubreddit } = postsSlice.actions;

export default postsSlice.reducer;