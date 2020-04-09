import Link from 'next/link';
import Pill from './Pill';
import ContactInfo from './ContactInfo';
import MoreInfo from './MoreInfo';
import LogoCircle from './LogoCircle';


const ProjectItem = ({ project }) => {
    const projectUrl = "/proyecto/" + project.id;
    let ig_url = null;
    if (project.ig_link) {
        ig_url = 'https://www.instagram.com/' + project.ig_link.replace("@", "")
    }
    return (
        <div className="max-w-sm rounded shadow-md hover:shadow-lg flex m-6 flex-col overflow-hidden bg-white justify-between">
            <div className="flex h-48 relative">
                <Link href={projectUrl}>
                    <a className="flex w-full">
                        <img className="object-cover" src="/images/dry-clean.png" />
                    </a>
                </Link>
                <div className="absolute">
                    <Pill category={project.categoria} subcategory={project.subcategoria} />
                </div>
                <div className="absolute bottom-0 right-0 -bottom-2 mr-3 ">
                    <LogoCircle project={project} />
                </div>
            </div>
            <div className="flex p-4 flex-col">
                <Link href={projectUrl}>
                    <a><h4 className="text-2xl text-gray-700 font-bold mb-2 hover:underline font-serif">{project.nombre}</h4></a>
                </Link>
                <ContactInfo project={project} />
            </div>
            <MoreInfo project={project} />
        </div>
    )
};

export default ProjectItem;