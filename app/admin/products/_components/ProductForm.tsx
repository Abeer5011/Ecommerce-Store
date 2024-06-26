'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { formatCurrency } from "@/lib/formatters"
import { useState } from "react"

export function ProductForm() {
    const [priceInCents, setPriceInCents] = useState<number>()
    return <form action="" className="space-y-8">
        <div className="space-y-2">
            <Label htmlFor="name">
                Name
            </Label>
            <Input type="text" id="name" name="name" required />
        </div>
        <div className="space-y-2">
            <Label htmlFor="PriceInCents">
                Price In Cents
            </Label>
            <Input type="number" id="PriceInCents" name="PriceInCents" required value={priceInCents}
                onChange={(e) => setPriceInCents(Number(e.target.value) || undefined)}
            />
        </div>
        <div className="text-muted-forground">{formatCurrency((priceInCents || 0) / 100)}

        </div>
        <div className="space-y-2">
            <Label htmlFor="Description">
                Description
            </Label>
            <Textarea id="Description" name="Description" required />
        </div>
        <div className="space-y-2">
            <Label htmlFor="file">
                File
            </Label>
            <Input type="file" id="file" name="file" required />
        </div>
        <div className="space-y-2">
            <Label htmlFor="image">
                Image
            </Label>
            <Input type="file" id="image" name="image" required />
        </div>
        <Button type='submit'>Save</Button>
    </form>
}