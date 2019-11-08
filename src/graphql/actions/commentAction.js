import { CommentModel } from '../../dataBase/models';

const addCommentAction = async (commentData, authorID) => {
  try {
    const commentIfo = {
      ...commentData,
      authorID,
    };

    return await CommentModel.create(commentIfo);
  } catch (error) {
    console.log("TCL: addCommentAction -> error", error)
  }
};

const updateCommentAction = async (filter, update) => {
  try {
    return await CommentModel.findOneAndUpdate(filter, update, { new: true });
  } catch (error) {
    console.log("TCL: updateUserAction -> error", error)
  }
};

const updateContentCommentAction = async (comment, commentID) => {
  try {
    const filter = { _id: commentID };
    const update = { $set: { comment } };
    return await updateCommentAction(filter, update);
  } catch (error) {
    console.log("TCL: updateContentCommentAction -> error", error)
  }
}

const deleteCommentAction = async (commentID) => {
  try {
    const filter = { _id: commentID };
    const update = { $set: { isActive: false } };
    return await updateCommentAction(filter, update);
  } catch (error) {
    console.log("TCL: deleteCommentAction -> error", error)
  }
};

const geCommentsFromPostAction = async (postID) => {
  try {
    return await CommentModel.find({ postID, isActive: true });
  } catch (error) {
    console.log("TCL: geCommentsFromPostAction -> error", error)
  }
}

export {
  addCommentAction,
  updateCommentAction,
  updateContentCommentAction,
  deleteCommentAction,
  geCommentsFromPostAction,
}