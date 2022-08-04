// // import { MdDeleteForever } from 'react-icons/md';

// const Note = ({ id, text, date })=>{
//     return (
//         <div className="note">
//             <span>{text}</span>

//             <div className="note-footer">
//                 <small>{date}</small>
//                 {/* <MdDeleteForever className="delete-icon" size='1.3em' /> */}
//                 <button className="delete-icon">Delete</button>
//             </div>
//         </div>
//     );
// }

// export default Note;



// import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				{/* <MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/> */}
                <button className="delete-icon" onClick={() => handleDeleteNote(id)}>Delete</button>
			</div>
		</div>
	);
};

export default Note;




