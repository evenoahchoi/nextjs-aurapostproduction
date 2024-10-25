import Image from "next/legacy/image";
import Link from "next/link";

export default function ProjectItem({ data }) {
    const title = data.properties.Name.title[0]?.plain_text || '';  // 제목
    const youtube = data.properties.Youtube?.url || '';  // 유튜브 URL
    const description = data.properties.Description.select ? data.properties.Description.select.name : '';  // 설명
    const imgSrc = data.cover.external?.url || '';  // 이미지 URL (external에서 가져오기)
    const projectId = data.id;  // 프로젝트 ID

    return (
        <Link legacyBehavior href={`/projects/${encodeURIComponent(projectId)}?title=${encodeURIComponent(title)}&youtube=${encodeURIComponent(youtube)}&description=${encodeURIComponent(description)}`}>
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
