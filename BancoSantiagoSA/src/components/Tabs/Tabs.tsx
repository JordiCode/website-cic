import { useState } from "react"
import { CustomerService, DigitalBank, FinancialProducts, Protection } from "./ServicesData"
import { Tab } from "./Tab"

const INITIAL_TAB_CONTENT = [
    {
        name: "Banco Digital",
        content: <DigitalBank />,
        isActive: true
    },
    {
        name: "Productos Financieros",
        content: <FinancialProducts />,
        isActive: false
    },
    {
        name: "Protección",
        content: <Protection />,
        isActive: false
    },
    {
        name: "Atención al Cliente",
        content: <CustomerService />,
        isActive: false
    }

]

export const Tabs = () => {
    const [services, setServices] = useState(INITIAL_TAB_CONTENT)

    const onTabChange = (index: number): void => {
        setServices(INITIAL_TAB_CONTENT.map((tab, i) => ({
            ...tab,
            isActive: i === index
        })))
    }

    return (
        <div className="flex justify-center gap-2 flex-wrap ">
            {
                services.map((tab, index) => (
                    <>
                        <Tab
                            key={tab.name}
                            name={tab.name}
                            isActive={tab.isActive}
                            onTabChange={() => onTabChange(index)}
                        />
                        {
                            tab.isActive
                            && <article className="md:order-1 py-4 text-center px-2">
                                {tab.content}
                            </article>
                        }
                    </>
                ))
            }
        </div>
    )
}