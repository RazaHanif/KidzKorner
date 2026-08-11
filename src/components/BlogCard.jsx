import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { NavLink } from 'react-router-dom';

const BlogCard = ({ blogSlugs=[] }) => {
    return (
        <>
            {blogSlugs.map((blog) => {
                return (
                    <Card className="w-full" key={blog.id}>
                        <CardHeader>
                            { blog.img }
                            <CardTitle className="">
                                { blog.title }
                            </CardTitle>
                            <CardDescription className="">
                                { blog.desc }
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <NavLink 
                                to={`/blog/${blog.slug}`}
                                end 
                                className="hover:scale-102 ease-in-out duration-300 flex flex-1"
                            >
                                <Button 
                                    className="cursor-pointer" 
                                    variant="secondary"
                                >
                                    Read Article
                                </Button>
                            </NavLink>
                        </CardContent>
                    </Card>
                )
            })}
        </>
    )
}

export default BlogCard