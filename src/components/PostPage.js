import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitPostPage } from "../actions/shared";
import { handleAddComment } from "../actions/comments";
import { formatDate } from "../utils/FormatItems";
import { handleLike } from "../utils/Global";
import ListComments from "./ListComments";
import {
  ListItem,
  TextField,
  ListItemText,
  Typography,
  IconButton,
  Icon,
  Button,
  Divider,
  Paper
} from "@material-ui/core/";
import DeleteAlert from "./DeleteAlert";
import EditAlert from "./EditAlert";
import Page404 from "./Page404";

class PostPage extends Component {
  state = {
    body: "",
    loading: true
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitPostPage(this.props.match.params.id));
  }

  handleSubmit = e => {
    e.preventDefault();
    const { body } = this.state;
    const { id } = this.props.match.params;
    const { dispatch, authedUser } = this.props;
    dispatch(
      handleAddComment({
        timestamp: Date.now(),
        body,
        author: authedUser,
        parentId: id
      })
    );
    this.setState({ body: "" });
  };

  handleChangeBody = e => {
    const body = e.target.value;
    body.length <= 1000 && this.setState(c => (c.body = body));
  };

  handleLikeLocal = (e, id, hasLiked) => {
    const { dispatch } = this.props;
    handleLike(dispatch, e, id, hasLiked);
  };

  render() {
    let { body } = this.state;
    let { post, authedUser, id } = this.props;
    const postLeft = 1000 - body.length;
    return post === undefined && authedUser !== null ? (
      <Page404 />
    ) : (
      <div>
        <h2>{post ? post.title : ""}</h2>
        <Divider />
        <div className="margin-top">
          <Paper>
            <ListItem>
              <div>
                <ListItemText
                  primary={post.body}
                  secondary={"@" + post.author}
                />
                <Typography variant="body1">
                  <i className="far fa-calendar-alt" />
                  {formatDate(post.timestamp)}
                  <br />
                  <i className="fas fa-reply" /> {post.commentCount} comments
                </Typography>
                <div>
                  <IconButton
                    aria-label="Open drawer"
                    onClick={e => this.handleLikeLocal(e, post.id, "upVote")}
                  >
                    <i className="far fa-thumbs-up" />
                  </IconButton>
                  <IconButton
                    aria-label="Open drawer"
                    onClick={e => this.handleLikeLocal(e, post.id, "downVote")}
                  >
                    <i className="far fa-thumbs-down" />
                  </IconButton>
                  <label
                    className={
                      post.voteScore !== 0
                        ? post.voteScore > 0
                          ? "text-green"
                          : "text-red"
                        : "text-gray"
                    }
                  >
                    {post.voteScore}
                  </label>
                </div>
              </div>
              {post.author === authedUser && (
                <div>
                  <EditAlert type={"Post"} item={post} />
                  <DeleteAlert type={"Post"} id={post.id} />
                </div>
              )}
            </ListItem>
          </Paper>
        </div>
        <form onSubmit={this.handleSubmit} className="center margin-top">
          <TextField
            label="Comment"
            name="Comment"
            value={body}
            onChange={this.handleChangeBody}
            multiline
            fullWidth
            rows="6"
            rowsMax="6"
            variant="outlined"
            margin="normal"
          />
          {body !== "" && postLeft < 50 && postLeft > 0 && (
            <span className="post-length">{postLeft}</span>
          )}
          <Button
            variant="contained"
            color="primary"
            className="btn"
            type="submit"
            margin="normal"
            disabled={body === ""}
          >
            Send
            <Icon>send</Icon>
          </Button>
        </form>
        <ListComments id={id} />
      </div>
    );
  }
}

function mapStateToProps({ authedUser, posts }, props) {
  const { id } = props.match.params;
  const post = Object.values(posts).filter(post => post.id === id)[0];
  return {
    authedUser,
    id,
    post
  };
}

export default connect(mapStateToProps)(PostPage);
