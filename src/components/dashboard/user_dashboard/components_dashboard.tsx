// "use client"

// import { useState } from "react"
// import { Home, MapPin, History, Gift, Menu } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Tabs, TabsContent } from "@/components/ui/tabs"
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarHeader,
//   SidebarTrigger,
//   SidebarProvider,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
// } from "@/components/ui/sidebar"

// export default function Dashboard() {
//   const [activeTab, setActiveTab] = useState("home")

//   const menuItems = [
//     { id: "home", label: "Home", icon: Home },
//     { id: "enter-location", label: "Enter Location", icon: MapPin },
//     { id: "dropoff-locations", label: "Dropoff Locations", icon: MapPin },
//     { id: "donation-history", label: "Donation History", icon: History },
//     { id: "gift-cards", label: "Gift Cards", icon: Gift },
//   ]

//   return (
//     <SidebarProvider>
//       <div className="flex h-screen overflow-hidden">
//         <Sidebar>
//           <SidebarHeader className="px-4 py-2">
//             <h2 className="text-xl font-bold">Donation Platform</h2>
//           </SidebarHeader>
//           <SidebarContent>
//             <SidebarMenu>
//               {menuItems.map((item) => (
//                 <SidebarMenuItem key={item.id}>
//                   <SidebarMenuButton onClick={() => setActiveTab(item.id)} isActive={activeTab === item.id}>
//                     <item.icon className="mr-2 h-4 w-4" />
//                     {item.label}
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarContent>
//         </Sidebar>

//         <main className="flex-1 overflow-y-auto">
//           <div className="container mx-auto p-6">
//             <header className="mb-6 flex items-center">
//               <SidebarTrigger>
//                 <Button variant="outline" size="icon" className="mr-4">
//                   <Menu className="h-6 w-6" />
//                   <span className="sr-only">Toggle Sidebar</span>
//                 </Button>
//               </SidebarTrigger>
//               <h1 className="text-2xl font-bold">{menuItems.find((item) => item.id === activeTab)?.label}</h1>
//             </header>

//             <Tabs value={activeTab} className="w-full">
//               <TabsContent value="home">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Welcome to the Donation Platform</CardTitle>
//                     <CardDescription>Here's how to get started with our platform</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <p>1. Enter your location to find nearby donation centers.</p>
//                     <p>2. View available dropoff locations in your area.</p>
//                     <p>3. Track your donation history and impact.</p>
//                     <p>4. Manage and redeem gift cards for donations.</p>
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               <TabsContent value="enter-location">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Enter Your Location</CardTitle>
//                     <CardDescription>Provide your address to find nearby donation centers</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <form className="space-y-4">
//                       <Input placeholder="Street Address" />
//                       <Input placeholder="City" />
//                       <Input placeholder="State" />
//                       <Input placeholder="Zip Code" />
//                       <Button type="submit">Find Donation Centers</Button>
//                     </form>
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               <TabsContent value="dropoff-locations">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Find Dropoff Locations</CardTitle>
//                     <CardDescription>Search for nearby dropoff locations</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <Command className="rounded-lg border shadow-md">
//                       <CommandInput placeholder="Search dropoff locations..." />
//                       <CommandList>
//                         <CommandEmpty>No locations found.</CommandEmpty>
//                         <CommandGroup heading="Suggestions">
//                           <CommandItem>Community Center</CommandItem>
//                           <CommandItem>Local Library</CommandItem>
//                           <CommandItem>City Hall</CommandItem>
//                         </CommandGroup>
//                       </CommandList>
//                     </Command>
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               <TabsContent value="donation-history">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Donation History</CardTitle>
//                     <CardDescription>Track your past donations and impact</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <p>Your donation history will be displayed here.</p>
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               <TabsContent value="gift-cards">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Gift Cards</CardTitle>
//                     <CardDescription>Manage and redeem your gift cards</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <p>Your gift card information will be displayed here.</p>
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </main>
//       </div>
//     </SidebarProvider>
//   )
// }

