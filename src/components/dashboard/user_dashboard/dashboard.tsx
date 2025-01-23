"use client"

import { useState } from "react"
import { Home, MapPin, History, Gift, Menu, MapPinned, ArrowRight, Heart, Zap, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
  SidebarProvider,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { UserButton } from "@clerk/nextjs"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home")

  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "enter-location", label: "Enter Location", icon: MapPin },
    { id: "dropoff-locations", label: "Dropoff Locations", icon: MapPinned },
    { id: "donation-history", label: "Donation History", icon: History },
    { id: "gift-cards", label: "Gift Cards", icon: Gift },
  ]

  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden w-full bg-gradient-dark text-foreground dark">
        <Sidebar className="border-r border-gray-700">
          <SidebarHeader className="px-4 py-6">
            <h2 className="text-xl font-bold">Clothaid Donations</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu className="px-4 py-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveTab(item.id)}
                    isActive={activeTab === item.id}
                    className={activeTab === item.id ? "bg-primary text-primary-foreground rounded-[8px]" : "rounded-[8px]"}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 overflow-y-auto pt-2 w-full">
          <header className="sticky top-0 z-10 border-b border-gray-600 bg-background">
            <div className="flex h-16 items-center gap-4 px-4 md:px-6">
              <SidebarTrigger>
                <Button variant="outline" size="icon" className="mr-4">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Sidebar</span>
                </Button>
              </SidebarTrigger>
              <h1 className="text-lg font-semibold text-zinc-300">User Dashboard / <span className="text-white">{menuItems.find((item) => item.id === activeTab)?.label}</span></h1>
              <div className="flex items-center gap-2 ml-auto">
                <UserButton />
                <h1 className="text-lg font-semibold"></h1>
              </div>
            </div>
          </header>
          <div className="container mx-auto p-6">
            <Tabs value={activeTab} className="w-full">
              <TabsContent value="home">
                <div className="space-y-8 bg-gradient-dark">
                  <Card className=" border-none">
                    <CardHeader>
                      <CardTitle className="text-3xl font-bold">Welcome to Your Donation Dashboard</CardTitle>
                      <CardDescription className="text-xl">Make a difference with every contribution</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      <Card className="glass-effect bg-[#acb742]">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
                          <Sparkles className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">$1,234</div>
                          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                        </CardContent>
                      </Card>
                      <Card className="glass-effect"> 
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Donation Streak</CardTitle>
                          <Zap className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">7 days</div>
                          <p className="text-xs text-muted-foreground">Keep it up!</p>
                        </CardContent>
                      </Card>
                      <Card className="glass-effect"> 
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Impact Score</CardTitle>
                          <Heart className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">92</div>
                          <p className="text-xs text-muted-foreground">Top 5% of donors</p>
                        </CardContent>
                      </Card>
                      <Card className="glass-effect"> 
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Next Goal</CardTitle>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">$2,000</div>
                          <p className="text-xs text-muted-foreground">$766 to go</p>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:px-6">
                    <Card className="glass-effect">
                      <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <Button className="w-full justify-start py-4 border-none backdrop-blur-lg bg-opacity-65 tracking-[-0.5px] bg-[#acb742] rounded-[8px] overflow-hidden" variant="outline">
                          <MapPin className="mr-1 h-4 w-4" />
                          Find Nearby Centers
                        </Button>
                        <Button className="w-full justify-start py-4 border-none backdrop-blur-lg bg-opacity-65 tracking-[-0.5px] bg-[#e46955] rounded-[8px] overflow-hidden" variant="outline">
                          <Gift className="mr-1 h-4 w-4" />
                          Redeem Gift Card
                        </Button>
                        <Button className="w-full justify-start py-4 border-none backdrop-blur-lg bg-opacity-65 tracking-[-0.5px] bg-[#8e6643] rounded-[8px] overflow-hidden" variant="outline">
                          <History className="mr-1 h-4 w-4" />
                          View Donation History
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="md:col-span-2 border-stone-600">
                      <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                            Donated $50 to Local Food Bank
                          </li>
                          <li className="flex items-center">
                            <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                            Redeemed $20 Gift Card
                          </li>
                          <li className="flex items-center">
                            <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                            Updated profile information
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="glass-effect">
                      <CardHeader>
                        <CardTitle>Upcoming Events</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>Community Cleanup - May 15</li>
                          <li>Charity Run - June 1</li>
                          <li>Donation Drive - June 10</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="enter-location">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="text-lg">Enter Your Location</CardTitle>
                    <CardDescription>Provide your address to find nearby donation centers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <Input className="border-stone-500" placeholder="Street Address" />
                      <Input className="border-stone-500" placeholder="City" />
                      <Input className="border-stone-500" placeholder="State" />
                      <Input className="border-stone-500" placeholder="Zip Code" />
                      <Button type="submit" className="p-4 bg-[#8e6643]">Find Donation Centers</Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="dropoff-locations">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="text-lg">Find Dropoff Locations</CardTitle>
                    <CardDescription>Search for nearby dropoff locations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Command className="rounded-[10px] border border-stone-600 shadow-md">
                      <CommandInput placeholder="Search dropoff locations..." />
                      <CommandList>
                        <CommandEmpty>No locations found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                          <CommandItem>Community Center</CommandItem>
                          <CommandItem>Local Library</CommandItem>
                          <CommandItem>City Hall</CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="donation-history">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="text-lg">Donation History</CardTitle>
                    <CardDescription>Track your past donations and impact</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Your donation history will be displayed here.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="gift-cards">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="text-lg">Gift Cards</CardTitle>
                    <CardDescription>Manage and redeem your gift cards</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Your gift card information will be displayed here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

