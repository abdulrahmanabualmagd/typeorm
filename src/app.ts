import express from "express";
import userRoutes from "./resources/user/user.routes";
import profileRoutes from "./resources/profile/profile.routes";
import postRoutes from "./resources/post/post.routes";
import commentRoutes from "./resources/comment/comment.routes";
import tagRoutes from "./resources/tag/tag.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/profiles", profileRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);
app.use("/tags", tagRoutes);

export default app;
