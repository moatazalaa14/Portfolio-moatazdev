import { FunctionComponent, useState } from 'react';
import { Iprojects } from '../type';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import Modal from 'react-modal';
const customStyles = {
	content: {
		width: '80%',
		height: '80%',
		margin: 'auto'
	}
};
const ProjectCard: FunctionComponent<{ project: Iprojects }> = ({
	project: { title, desc, category, github, live, img }
}) => {
	const [ showDetails, setShowDetails ] = useState(false);
	const [ modalIsOpen, setIsOpen ] = useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<div>
            <div className="grid grid-cols-1  rounded-lg shadow-3xl justify-items-center dark:bg-dark-200">
			<img src={img} alt={title} className="cursor-pointer max-h-40" onClick={openModal} />
			<h2 className="my-2 text-center">{title}</h2>
            </div>

			<Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal" style={customStyles}>
				<div className="absolute top-0 left-0 z-10 grid items-center w-full h-full grid-cols-1 bg-gray-200 md:grid-cols-2 gap-x-12 dark:bg-dark-200 justify-items-center">
					<div>
						<img src={img} alt={title} className="cursor-pointer max-h-40 lg:max-h-80" />
						<div className="flex justify-center mt-2 bg-gray-200 dark:bg-dark-200">
							{github!==""?<a
								href={github}
								className="flex items-center p-2 mt-2 mb-2 mr-4 bg-gray-300 rounded-md dark:bg-dark-400 hover:bg-green hover:text-white"
								target="_blank"
							>
								Github <AiFillGithub className="ml-2" />{' '}
							</a>:null}
							<a
								href={live}
								className={`flex items-center p-2 mt-2 mb-2 mr-4 bg-gray-300 rounded-md dark:bg-dark-400 hover:bg-green hover:text-white ${live===""?"pointer-events-none cursor-default":null}`}
								target="_blank"
							>
								Live <AiFillProject className="ml-2" />{' '}
							</a>
						</div>
					</div>
					<div className="mt-4 ml-4">
						<h2 className="mt-3 mb-3 text-xl font-medium md:text-2xl">{title}</h2>
						<p className="mb-3">{desc}</p>
						<div className="flex flex-wrap mb-2 ml-2 space-x-2 text-sm">
							{category.map(cate => (
								<span className="mt-2 px-1 py-2 bg-gray-300 rounded-sm dark:bg-dark-400" key={cate}>
									{cate}
								</span>
							))}
						</div>
					</div>
					<button
						onClick={closeModal}
						className="absolute bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
					>
						<MdClose size={30} />
					</button>
				</div>
			</Modal>
		</div>
	);
};

export default ProjectCard;
