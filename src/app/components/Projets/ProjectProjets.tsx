import { Separator } from "@/components/ui/separator";
import { projects } from '@/config/projects/project';
import { CardProject } from '@/components/CardProject/CardProject';

function ProjectProjets() {
    return (
        <section>
            <h1 id='SkillHome' className="text-3xl font-bold flex mx-auto justify-center w-1/2 text-white mt-16">Projets</h1>
            <div className="flex flex-wrap justify-start mx-16">
                <h2 id='SkillHome' className="text-2xl w-1/2 text-gray-600 mt-16">Fullstack</h2><Separator />
            </div>
            <div className="flex flex-row flex-wrap gap-5 text-xl pt-3 justify-start mt-6 mx-16">
                {projects.map((project, idx) => (
                    projects[idx].type.includes('Fullstack') &&
                        <CardProject key={idx} name={project.name} lien={project.lien} date={project.date} description={project.description} skills={project.skills || []} technos={project.technos || []} />
                ))}
            </div>
            <div className="flex flex-wrap justify-start mx-16">
                <h2 id='SkillHome' className="text-2xl w-1/2 text-gray-600 mt-16">UI/UX Design</h2><Separator />
            </div>
            <div className="flex flex-row flex-wrap gap-5 text-xl pt-3 justify-start mt-6 mx-16">
                {projects.map((project, idx) => (
                    projects[idx].type.includes('Design') &&
                        <CardProject key={idx} name={project.name} lien={project.lien} date={project.date} description={project.description} skills={project.skills || []} technos={project.technos || []} />
                ))}
            </div>
        </section>
    );
}

export { ProjectProjets };