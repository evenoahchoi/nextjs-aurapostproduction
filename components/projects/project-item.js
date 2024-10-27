import Image from "next/legacy/image";
import Link from "next/link";

export default function ProjectItem({ data }) {
    const title = data.title || '';  // 제목
    const youtube = data.youtube || '';  // 유튜브 URL
    const description = data.description || '';  // 설명
    const imgSrc = data.imgSrc || '';  // 이미지 URL
    const projectId = data.projectId;  // 프로젝트 ID

    return (
        <Link 
            legacyBehavior 
            href={`/projects/${encodeURIComponent(projectId)}?title=${encodeURIComponent(title)}&youtube=${encodeURIComponent(youtube)}&description=${encodeURIComponent(description)}`}
        >
            <a className="project-card">
                <Image
                    className="rounded-xl"
                    src={imgSrc}
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
