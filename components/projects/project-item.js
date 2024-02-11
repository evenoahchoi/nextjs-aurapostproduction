import Image from "next/legacy/image";
import Link from "next/link";

export default function ProjectItem({ data }) {
    const title = data.properties.Name.title[0].plain_text;
    const youtube = data.properties.Youtube.url;
    const description = data.properties.Description.rich_text[0] ? data.properties.Description.rich_text[0].plain_text : '';
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const projectId = data.id;

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
