export interface Ads {
  id: number;
  profile: {
    id: number,
    phone_number: number,
    user: {
       id: number,
      username: string,
      first_name: string,
      last_name: string,
      email: string,
    }
  };
  business: {
    id: number,
    name: string,
    price: number,
    years_on_the_market: number,
    revenue: number,
    profit: number,
    expenses: number,
    share_of_sale: number,
    borrowed_funds: number,
    commodity_rest: number,
    estimated_payback: number,
    num_of_personal: number,
    production_means: string,
    term_of_the_lease: number,
    extend_the_lease: boolean,
    company_foundation: string,
    franchise_program_start,
    num_of_franchise_businesses: number,
    num_of_own_enterprises: number,
    launch_costs: number,
    entrance_fee: number,
    comment_entrance_fee: number,
    royalty,
    comment_royalty: string,
    other_current_payments: number,
    training,
    brief_description,
    package,
    requirements_franchise,
    requirements_representation,
    contact_name: string,
    phone: number,
    email: string,
    comment: string,
    date,
    views: number,
    category: {
      id: number,
      name: string
    },
    region: {
      id: number,
      name: string,
      region: number
    },
    type: {
      id: number,
      name: string
    },
    building: {
      id: number,
      name: string
    }
  };
  status: {
    id: number,
    name: string
  };
}
