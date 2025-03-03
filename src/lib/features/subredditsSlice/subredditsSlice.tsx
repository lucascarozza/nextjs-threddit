import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Subreddit {
  id: string;
  display_name: string;
}

interface ResponseData {
  data: {
    children: { data: Subreddit }[];
  };
}

// Fetch list of popular subreddits
export const fetchSubreddits = createAsyncThunk(
  "subreddits/fetchSubreddits",
  async (): Promise<Subreddit[]> => {
    try {
      const response = await fetch(
        // Yes, this is hardcoded and will remain so
        `https://www.reddit.com/subreddits/popular.json`
      );

      if (!response.ok) {
        throw new Error("Response error");
      }

      const data: ResponseData = await response.json();

      return data.data.children.map((subreddit) => ({
        id: subreddit.data.id,
        display_name: subreddit.data.display_name,
      }));

    } catch (error) {
      if (error instanceof Error) {
        console.error("Error fetching subreddits: ", error.message);
      } else {
        console.error("An unknown error occurred: ", error);
      }
      throw error;
    }
  }
);

interface SubredditsState {
  subredditsList: Subreddit[];
  status: "idle" | "pending" | "success" | "failed";
  error: boolean;
}

const initialState: SubredditsState = {
  subredditsList: [],
  status: "idle",
  error: false,
}

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    (builder)
      .addCase(fetchSubreddits.pending, (state) => {
        state.status = "pending";
        state.error = false;
      })
      .addCase(fetchSubreddits.fulfilled, (state, action: PayloadAction<Subreddit[]>) => {
        state.subredditsList = action.payload;
        state.status = "success";
        state.error = false;
      })
      .addCase(fetchSubreddits.rejected, (state) => {
        state.status = "failed";
        state.error = true;
      })
  }
})

export default subredditsSlice.reducer;