const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const deliveryPerson = Object.values(order.order.delivery);
    const clientName = order.name;
    const clientPhoneNumber = order.phoneNumber;
    const clientAddress = Object.values(order.address);

    console.log(`Olá ${deliveryPerson[0]}, entrega para: ${clientName}, Telefone: ${clientPhoneNumber}, R. ${clientAddress[0]}, Nº: ${clientAddress[1]}, AP: ${clientAddress[2]}.`);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const modifiedOrder = {
        name: 'Luiz Silva',
        payment: {
            total: 50,
        },
    };

    Object.assign(order, modifiedOrder);
    const clientName = order.name;
    const pizzas = Object.keys(order.order.pizza);
    const drinks = Object.values(order.order.drinks.coke);
    const totalPayment = order.payment.total;

    console.log(`Olá ${clientName}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks[0]} é R$${totalPayment},00.`);
  }
  
  orderModifier(order);