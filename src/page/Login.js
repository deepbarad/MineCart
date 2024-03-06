import { Card, CardBody } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import React from "react";

function Login() {
    return (
        <div className="flex justify-center">
            <Card
                style={{ border: "2px solid black", width: "20%", marginTop: "18%" }}
            >
                <CardBody>
                    <h1
                        style={{
                            fontSize: "25px",
                            fontWeight: "bold",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        Login In
                    </h1>
                    <Input type="text" label="Name" className=" p-3" />
                    <Input type="text" label="Passwords" className=" p-3" />
                    <Button color="primary" style={{ width: "30px", marginLeft: "40%" }}>
                        submit
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default Login;
