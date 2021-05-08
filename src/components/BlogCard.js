import React from "react";
import { Card, CardHeader, IconButton } from "@material-ui/core";
export default function BlogCard({ blog }) {
  return (
    <div>
      <Card>
        <CardHeader
          action={blog.settings}
          title={blog.title}
          subheader={blog.author}
        />
      </Card>
    </div>
  );
}
