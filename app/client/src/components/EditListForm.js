import React, { component } from 'react';

class EditListForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.lists.id,
      title: this.props.lists.title,
      excerpt: this.props.lists.excerpt
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    handleChange = (e) => {
      this.setState = {[e.target.name]: e.target.value }
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const { id, title, excerpt } = this.state;
      this.props.editList(id, title, excerpt);
    }

  }
  
  render() {
  return(
      <form onSubmit={this.handleSubmit}>
        <input name="title"
              type="text"
              placeholder="Title..."
              value={this.state.title}
              onChange={this.handleChange} />
        <input name="excerpt"
              type="text"
              placeholder="Excerpt..."
              value={this.state.excerpt}
              onChange={this.handleChange} />
          <button>Update List</button>
      </form>
    )

  }
}

export default EditListForm;