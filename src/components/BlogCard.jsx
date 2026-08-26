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
            {Object.values(blogSlugs).map((blog) => {
                return (
                    <Card className="w-full" key={blog.id}>
                        <CardHeader>
                            { blog.img }
                            <CardTitle className="">
                                { blog.title }
                            </CardTitle>
                            <CardDescription className="">
                                { blog.description }
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <NavLink 
                                to={`/blog/${blog.slug}`}
                                end 
                                className="flex flex-1"
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