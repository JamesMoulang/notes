import React from 'react';
import {browserHistory} from 'react-router';
import {addNote} from '../actions/Notes';
import {connect} from 'react-redux';

var footerStyle = {
	height: 88,
	position: 'fixed',
	bottom: '0%',
	width: '100%',
	padding: 20
};

const mapStateToProps = (state) => {
	return {
		notes: state.Notes.notes
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addNote: () => {
			dispatch(addNote());
		}
	}
}

class NotesComponent extends React.Component {
	newNote() {
		this.props.addNote();
	}

	render() {
		return (
			<div>
				<div style={footerStyle}>
					<a onClick={this.newNote.bind(this)} className="button is-large is-primary is-pulled-right">New Card</a>
				</div>
			</div>
		);
	}
}

const Notes = connect(
	mapStateToProps,
	mapDispatchToProps
)(NotesComponent);

export default Notes;