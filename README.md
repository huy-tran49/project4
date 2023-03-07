# Customize Sport Apparel Store - Stylex
A online apparel store where you can customize your apparel with a picture or logo

## User Story
As a user, I want to be able to:
- Signup, Login, Logout
- Make an order
- Upload a picture
- Scale the picture, rotate, and placement
- Choose the type of apprarel they want to put the picture on, and the color.
- See their order history
- Add orders to cart and checkout

## Routes

### Users - Customer

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | /sign-up               | users#signup      |
| POST   | /sign-in               | users#signin      |
| PATCH  | /change-password/      | users#changepw    |
| DELETE | /sign-out/             | users#signout     |

### Users - Admin

| Verb   | URI Pattern                   | Controller#Action |
|--------|-------------------------------|-------------------|
| GET    | /admin/order                  | admin#show        |
| PATCH  | /admin/order/:orderid/update  | admin#update      |
| DELETE | /admin/order/:orderid/delete  | admin#delete      |

### Order

| Verb   | URI Pattern                   | Controller#Action |
|--------|-------------------------------|-------------------|
| GET    | /order/history                | order#show        |
| POST   | /order/create                 | order#create      |
| PATCH  | /order/:orderid/update        | order#update      |
| DELETE | /order/:orderid/delete        | order#delete      |

### Image

| Verb   | URI Pattern                   | Controller#Action |
|--------|-------------------------------|-------------------|
| GET    | /image                        | image#show        |
| POST   | /image/create                 | image#create      |

### Cart

| Verb   | URI Pattern                   | Controller#Action |
|--------|-------------------------------|-------------------|
| GET    | /cart                         | cart#show         |
| PATCH  | /cart/:orderid/update         | cart#update       |
| DELETE | /cart/:orderid/delete         | cart#delete       |

## Wireframe

![home](https://user-images.githubusercontent.com/23158353/223463814-68b91a97-0b66-443f-acae-becc23302cde.PNG)
![create](https://user-images.githubusercontent.com/23158353/223463845-b5b9afae-a6c7-403e-9d0d-15994a00758d.PNG)
![order](https://user-images.githubusercontent.com/23158353/223463866-92be80a0-b5ca-4bfd-82c5-8a72f3ad380a.PNG)

## ERD

![ERD](https://user-images.githubusercontent.com/23158353/223519891-3711d42e-a27e-4894-8623-8949d82288fc.PNG)

