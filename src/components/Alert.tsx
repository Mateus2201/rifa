import { Terminal } from "lucide-react"

import {
    Alert as AlertComponent,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"



export function Alert() {
    return <AlertComponent className={`p-2`}>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
            You can add components to your app using the cli.
        </AlertDescription>
    </AlertComponent>
}
