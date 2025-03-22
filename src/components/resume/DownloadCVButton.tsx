"use client"; // Make this a Client Component

import React from "react";
import { Button, Flex, Arrow, Avatar } from "@/once-ui/components";
import { home, about, person, newsletter, resume } from "@/app/resources/content";

const DownloadCVButton = () => {
    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = "/files/Arth_Patel_CV.pdf"; // Ensure the CV file is inside the public folder
        link.download = "ARTH_PATEL.pdf"; // Custom filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Button
            id="about"
            data-border="rounded"
            variant="secondary"
            size="m"
            onClick={handleDownloadCV}
            arrowIcon
        >
            <Flex gap="8" vertical="center">
                {person.avatar && (
                    <Avatar
                        style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                        src={person.avatar}
                        size="m"
                    />
                )}
                Download {resume.title}
            </Flex>
        </Button>
    );
};

export default DownloadCVButton;
