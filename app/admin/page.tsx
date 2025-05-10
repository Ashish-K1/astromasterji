import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
// import Image from "next/image"
import { Check, X, Star, Users, DollarSign, Calendar } from "lucide-react"

export default function AdminDashboard() {
  // Sample data for charts
  const revenueData = [
    { name: "Jan", consultations: 4000, poojas: 2400, products: 1800 },
    { name: "Feb", consultations: 3000, poojas: 1398, products: 2000 },
    { name: "Mar", consultations: 2000, poojas: 3800, products: 2200 },
    { name: "Apr", consultations: 2780, poojas: 3908, products: 2500 },
    { name: "May", consultations: 1890, poojas: 4800, products: 2300 },
    { name: "Jun", consultations: 2390, poojas: 3800, products: 2800 },
  ]

  const serviceDistribution = [
    { name: "Chat Consultations", value: 40 },
    { name: "Call Consultations", value: 30 },
    { name: "Poojas", value: 20 },
    { name: "Products", value: 10 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  // Sample data for tables
  const pendingAstrologers = [
    {
      id: 1,
      name: "Rajiv Sharma",
      image: "/placeholder.svg?height=40&width=40",
      specialties: ["Vedic", "Numerology"],
      experience: "12 years",
      appliedOn: "May 5, 2025",
    },
    {
      id: 2,
      name: "Priya Patel",
      image: "/placeholder.svg?height=40&width=40",
      specialties: ["Tarot", "Palmistry"],
      experience: "8 years",
      appliedOn: "May 7, 2025",
    },
  ]

  const recentTransactions = [
    {
      id: 1,
      user: "Amit Kumar",
      service: "Chat Consultation",
      amount: "₹800",
      status: "Completed",
      date: "May 10, 2025",
    },
    {
      id: 2,
      user: "Neha Singh",
      service: "Ganesh Puja",
      amount: "₹2,100",
      status: "Pending",
      date: "May 9, 2025",
    },
    {
      id: 3,
      user: "Rahul Verma",
      service: "Rudraksha Mala",
      amount: "₹1,200",
      status: "Completed",
      date: "May 8, 2025",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-gray-500 mr-2" />
              <p className="text-2xl font-bold">12,345</p>
            </div>
            <p className="text-xs text-green-600 mt-2">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 text-gray-500 mr-2" />
              <p className="text-2xl font-bold">₹8.5L</p>
            </div>
            <p className="text-xs text-green-600 mt-2">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Astrologers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-gray-500 mr-2" />
              <p className="text-2xl font-bold">85</p>
            </div>
            <p className="text-xs text-green-600 mt-2">+5 new this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Consultations Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-500 mr-2" />
              <p className="text-2xl font-bold">124</p>
            </div>
            <p className="text-xs text-green-600 mt-2">+18% from yesterday</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={revenueData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="consultations" stackId="a" fill="#8884d8" />
                  <Bar dataKey="poojas" stackId="a" fill="#82ca9d" />
                  <Bar dataKey="products" stackId="a" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Service Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={serviceDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {serviceDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <Tabs defaultValue="astrologers">
          <TabsList className="mb-6">
            <TabsTrigger value="astrologers">Astrologer Management</TabsTrigger>
            <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="astrologers" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Pending Astrologer Verifications</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Astrologer</TableHead>
                      <TableHead>Specialties</TableHead>
                      <TableHead>Experience</TableHead>
                      <TableHead>Applied On</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingAstrologers.map((astrologer) => (
                      <TableRow key={astrologer.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <img
                              src={astrologer.image || "/placeholder.svg"}
                              alt={astrologer.name}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                            <span>{astrologer.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {astrologer.specialties.map((specialty, index) => (
                              <span key={index} className="bg-yellow-50 text-yellow-800 text-xs px-2 py-0.5 rounded">
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>{astrologer.experience}</TableCell>
                        <TableCell>{astrologer.appliedOn}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-green-500 hover:bg-green-600">
                              <Check className="h-4 w-4 mr-1" /> Approve
                            </Button>
                            <Button size="sm" variant="destructive">
                              <X className="h-4 w-4 mr-1" /> Reject
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-4 text-center">
                  <Button variant="outline">View All Astrologers</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transactions" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>{transaction.user}</TableCell>
                        <TableCell>{transaction.service}</TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              transaction.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {transaction.status}
                          </span>
                        </TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-4 text-center">
                  <Button variant="outline">View All Transactions</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Generate Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Revenue Report</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Generate detailed revenue reports by service type, time period, and more.
                      </p>
                      <Button className="w-full">Generate</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">User Activity Report</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Analyze user engagement, retention, and conversion rates.
                      </p>
                      <Button className="w-full">Generate</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Astrologer Performance</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Review ratings, consultations, and earnings for each astrologer.
                      </p>
                      <Button className="w-full">Generate</Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
