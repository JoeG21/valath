# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#   DateTime: YYYY-MM-DD HH:MM:SS
User.destroy_all
UserOpp.destroy_all
Opp.destroy_all
Shelter.destroy_all

# Users
u1 = User.create({
    first_name: 'Joe', 
    last_name: 'Gomez', 
    email: 'joe@gmail.com',
    username: 'joeg',
    password: '123', 
    age: 21
})
u2 = User.create({
    first_name:'Bob', 
    last_name: 'Doe',
    email: 'bob@gmail.com',
    username: 'bob1', 
    password: '123',
    age: 30
})

# Admin
a1 = User.create({
    first_name:'Rick',
    last_name: 'Doe',
    email: 'rick@gmail.com',
    username: 'rick1',
    password: '123',
    age: 40,
    admin: true
})

# Shelters
s1 = Shelter.create({
    name: 'BARC Volunteering',
    location: '2700 Evella St, Houston, TX 77026',
    img: 'https://www.clipartkey.com/mpngs/m/35-355495_icon-of-office-building-building-png-cartoon.png',
    phone: 7138639835
})
s2 = Shelter.create({
    name: 'Star of Hope - Women & Family Emergency Shelter',
    location: '419 Dowling Street, Houston, TX 77003',
    img: 'https://www.pieperhouston.com/wp-content/uploads/2018/10/SOHFront.jpg',
    phone: 7132222220
})
s3 = Shelter.create({
    name: 'Citizens For Animal Protection',
    location: '107 E 22nd St, Houston, TX 77008',
    img: 'https://cultrissecurity.com/wp-content/uploads/2018/07/Citizens-for-Animal-Protetion-800x341.jpg',
    phone: 2814970591
})
s4 = Shelter.create({
    name: 'Friends For Life',
    location: '17555 Katy Fwy, Houston, TX 77094',
    img: 'https://inhabitat.com/wp-content/blogs.dir/1/files/2013/05/Friends-For-Life-Gensler-12.jpg',
    phone: 7138639835
})
s5 = Shelter.create({
    name: 'Volunteer Houston',
    location: '3303 Main St, Houston, TX 77002',
    img: 'https://www.clipartkey.com/mpngs/m/35-355495_icon-of-office-building-building-png-cartoon.png',
    phone: 2816561533
})
s6 = Shelter.create({
    name: 'Loaves & Fishes Soup Kitchen (Magnificat Houses)',
    location: '2009 Congress St, Houston, TX 77002',
    img: 'https://images1.houstonpress.com/imager/u/745xauto/9588643/hou_news_i-45_dsc_6661_photo_by_jeff_balke.jpg',
    phone: 7135294231
})
s7 = Shelter.create({
    name: 'Houston SPCA',
    location: '7007 Old Katy Rd, Houston, TX 77024',
    img: 'https://jwcouchfoundation.org/assets/stories/houston_spca_7.jpg',
    phone: 7138697722
})
s8 = Shelter.create({
    name: 'The Beacon',
    location: '1212 Prairie St, Houston, TX 77002',
    img: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1365,w_2048,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1200/thebeacon_Facebook_jpu85z.jpg',
    phone: 7132209737
})
s9 = Shelter.create({
    name: 'Volunteers of America Texas',
    location: '4808 Yale St, Houston, TX 77018',
    img: 'https://www.clipartkey.com/mpngs/m/35-355495_icon-of-office-building-building-png-cartoon.png',
    phone: 7134600781
})
s10 = Shelter.create({
    name: 'Habitat for Humanity Northwest Harris County',
    location: '13350 Jones Rd, Houston, TX 77070',
    img: 'https://s.hdnux.com/photos/53/11/41/11311193/9/1200x0.jpg',
    phone: 2818905585
})
s11 = Shelter.create({
    name: 'Houston Humane Society',
    location: '14700 Almeda Rd, Houston, TX 77053',
    img: 'https://www.houstonhumane.org/Themes/Default/Content/Assets/Location%20and%20Hours.jpg',
    phone: 7134336421
})


# Opps
o1 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless',
    date: '2020-12-05 12:00:00', 
    howlong: 2, 
    shelter_id: s1.id
})
o2 = Opp.create({
    title: 'Cleaning',
    des: 'Need some help cleaning the area',
    date: '2021-11-21 13:00:00', 
    howlong: 4, 
    shelter_id: s1.id
})
o3 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless and in need',
    date: '2020-12-05 10:00:00', 
    howlong: 3, 
    shelter_id: s2.id
})
o4 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless and in need',
    date: '2020-12-05 10:00', 
    howlong: 3, 
    shelter_id: s2.id
})
o5 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless and in need',
    date: '2020-12-05 10:00', 
    howlong: 3, 
    shelter_id: s3.id
})
o6 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless and in need',
    date: '2020-12-05 10:00', 
    howlong: 3, 
    shelter_id: s3.id
})
o7 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless and in need',
    date: '2020-11-05 12:00', 
    howlong: 3, 
    shelter_id: s4.id
})
o8 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless and in need',
    date: '2020-12-21 06:00', 
    howlong: 3, 
    shelter_id: s4.id
})
o9 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless and in need',
    date: '2020-11-21 06:00', 
    howlong: 3, 
    shelter_id: s5.id
})
o10 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless and in need',
    date: '2020-12-21 06:00', 
    howlong: 3, 
    shelter_id: s5.id
})
o11 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless and in need',
    date: '2020-11-21 06:00', 
    howlong: 3, 
    shelter_id: s6.id
})
o12 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless and in need',
    date: '2020-11-21 06:00', 
    howlong: 3, 
    shelter_id: s6.id
})
o13 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless and in need',
    date: '2020-11-21 06:00', 
    howlong: 3, 
    shelter_id: s7.id
})
o14 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless and in need',
    date: '2020-11-21 06:00', 
    howlong: 3, 
    shelter_id: s7.id
})
o15 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless and in need',
    date: '2020-11-21 06:00', 
    howlong: 3, 
    shelter_id: s8.id
})
o16 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless and in need',
    date: '2020-11-21 06:00', 
    howlong: 3, 
    shelter_id: s8.id
})
o17 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless and in need',
    date: '2020-11-21 06:00', 
    howlong: 3, 
    shelter_id: s9.id
})
o18 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless and in need',
    date: '2020-11-21 06:00', 
    howlong: 3, 
    shelter_id: s9.id
})
o19 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless and in need',
    date: '2020-11-21 06:00', 
    howlong: 3, 
    shelter_id: s10.id
})
o20 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless and in need',
    date: '2020-11-21 06:00', 
    howlong: 3, 
    shelter_id: s10.id
})
o21 = Opp.create({
    title: 'Serving',
    des: 'Serving food to the homeless and in need',
    date: '2020-11-21 06:00', 
    howlong: 3, 
    shelter_id: s11.id
})
o22 = Opp.create({
    title: 'Cleaning',
    des: 'Need some help cleaing the place up',
    date: '2020-11-21 06:00', 
    howlong: 3, 
    shelter_id: s11.id
})



# UserOpps
uo1 = UserOpp.create({
    user_id: u1.id,
    opp_id: o1.id
})