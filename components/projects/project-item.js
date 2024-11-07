import Image from "next/legacy/image";
import Link from "next/link";

export default function ProjectItem({ data }) {
    const title = data.title || '';  // 제목
    const youtube = data.youtube || '';  // 유튜브 URL
    const description = data.description || '';  // 설명
    const projectId = data._id;  // MongoDB의 ObjectID를 사용
    const imagePath = `/images/${projectId}.jpg`; // public/images 폴더에서 _id를 파일명으로 사용

    return (
        <Link 
            legacyBehavior 
            href={`/projects/${encodeURIComponent(projectId)}?title=${encodeURIComponent(title)}&youtube=${encodeURIComponent(youtube)}&description=${encodeURIComponent(description)}`}
        >
            <a className="project-card">
                <Image
                    className="rounded-xl"
                    src={imagePath}
                    alt="cover image"
                    width="80%"
                    height="50%"
                    layout="responsive"
                    objectFit="fill"
                    quality={100}
                />
            </a>
        </Link>
    );
}
