import React from 'react'

const page = () => {
   return <div id="el-pv8aoj0m">
          <h2  className="text-2xl font-bold text-gray-900 mb-6" id="el-ofama9xs">Customer Information</h2>
          
           <div  className="mb-8" id="el-pguf45hz">
            <h3  className="text-lg font-semibold text-gray-900 mb-4" id="el-sx2nqeur">Contact Information</h3>
            <div  className="space-y-4" id="el-lith5fmt">
              <div id="el-g6latl48">
                <label for="email"  className="block text-sm font-medium text-gray-700 mb-1" id="el-p7ka2wv0">Email Address *</label>
                <input type="email" id="email" name="email" required=""  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="john@example.com"/>
              </div>
              
              <div id="el-kdx79aeu">
                <label for="phone"  className="block text-sm font-medium text-gray-700 mb-1" id="el-afk5g5p6">Phone Number</label>
                <input type="tel" id="phone" name="phone"  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+1 (555) 123-4567"/>
              </div>
            </div>
          </div>

           <div  className="mb-8" id="el-r3jk779u">
            <h3  className="text-lg font-semibold text-gray-900 mb-4" id="el-m3i410bv">Shipping Address</h3>
            <div  className="space-y-4" id="el-4kufgfxw">
              <div  className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="el-2n41rk98">
                <div id="el-iysxm4m5">
                  <label for="firstName"  className="block text-sm font-medium text-gray-700 mb-1" id="el-cv8kov07">First Name *</label>
                  <input type="text" id="firstName" name="firstName" required=""  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="John"/>
                </div>
                <div id="el-mb1ohm2c">
                  <label for="lastName"  className="block text-sm font-medium text-gray-700 mb-1" id="el-hx84w2dp">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" required=""  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Doe"/>
                </div>
              </div>
              
              <div id="el-cb25kq0i">
                <label for="company"  className="block text-sm font-medium text-gray-700 mb-1" id="el-73f3z3l5">Company (Optional)</label>
                <input type="text" id="company" name="company"  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Company Name"/>
              </div>
              
              <div id="el-nvn9xgf5">
                <label for="address"  className="block text-sm font-medium text-gray-700 mb-1" id="el-ljczkh9h">Street Address *</label>
                <input type="text" id="address" name="address" required=""  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="123 Main Street"/>
              </div>
              
              <div id="el-28ty7bwa">
                <label for="apartment"  className="block text-sm font-medium text-gray-700 mb-1" id="el-15heymyr">Apartment, Suite, etc. (Optional)</label>
                <input type="text" id="apartment" name="apartment"  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Apt 4B"/>
              </div>
              
              <div  className="grid grid-cols-1 sm:grid-cols-3 gap-4" id="el-7otkvk6p">
                <div id="el-aankafiv">
                  <label for="city"  className="block text-sm font-medium text-gray-700 mb-1" id="el-69cigmld">City *</label>
                  <input type="text" id="city" name="city" required=""  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="New York"/>
                </div>
                <div id="el-1yi7xx9f">
                  <label for="state"  className="block text-sm font-medium text-gray-700 mb-1" id="el-avol7vho">State *</label>
                  <select id="state" name="state" required=""  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="" id="el-f3h9njjs">Select State</option>
                    <option value="AL" id="el-08cifkxt">Alabama</option>
                    <option value="AK" id="el-1soru3xl">Alaska</option>
                    <option value="AZ" id="el-g6cg4omv">Arizona</option>
                    <option value="CA" id="el-cxepbubg">California</option>
                    <option value="FL" id="el-e5qir836">Florida</option>
                    <option value="NY" id="el-ptfxwe6i">New York</option>
                    <option value="TX" id="el-mqu1sxbz">Texas</option>
                  </select>
                </div>
                <div id="el-52rdzhnt">
                  <label for="zipCode"  className="block text-sm font-medium text-gray-700 mb-1" id="el-ol1sjb4r">ZIP Code *</label>
                  <input type="text" id="zipCode" name="zipCode" required=""  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="10001"/>
                </div>
              </div>
              
              <div id="el-6j16hdlz">
                <label for="country"  className="block text-sm font-medium text-gray-700 mb-1" id="el-k04n8sr2">Country *</label>
                <select id="country" name="country" required=""  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="US" id="el-rr7iun0z">United States</option>
                  <option value="CA" id="el-6lra7szo">Canada</option>
                  <option value="MX" id="el-mam1vx3v">Mexico</option>
                </select>
              </div>
            </div>
          </div>

           <div  className="mb-8" id="el-w73qlgyb">
            <div  className="flex items-center justify-between mb-4" id="el-yfwawk7l">
              <h3  className="text-lg font-semibold text-gray-900" id="el-2b69dlwc">Billing Address</h3>
              <label  className="flex items-center" id="el-1qdqrm5j">
                <input type="checkbox" id="sameAsShipping" name="sameAsShipping" checked=""  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"/>
                <span  className="ml-2 text-sm text-gray-700" id="el-5sh0z04p">Same as shipping address</span>
              </label>
            </div>
            
            <div id="billingAddressForm"  className="hidden space-y-4">
              <div  className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="el-e23sfyua">
                <div id="el-wof6jau7">
                  <label for="billingFirstName"  className="block text-sm font-medium text-gray-700 mb-1" id="el-895dafiu">First Name *</label>
                  <input type="text" id="billingFirstName" name="billingFirstName"  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="John"/>
                </div>
                <div id="el-wm2o7w4u">
                  <label for="billingLastName"  className="block text-sm font-medium text-gray-700 mb-1" id="el-3b3gn7lm">Last Name *</label>
                  <input type="text" id="billingLastName" name="billingLastName"  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Doe"/>
                </div>
              </div>
              
              <div id="el-41xmwg48">
                <label for="billingAddress"  className="block text-sm font-medium text-gray-700 mb-1" id="el-nmkkmr6k">Street Address *</label>
                <input type="text" id="billingAddress" name="billingAddress"  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="123 Main Street"/>
              </div>
              
              <div  className="grid grid-cols-1 sm:grid-cols-3 gap-4" id="el-wo3p7qsa">
                <div id="el-i1cfpsxh">
                  <label for="billingCity"  className="block text-sm font-medium text-gray-700 mb-1" id="el-1a17d40d">City *</label>
                  <input type="text" id="billingCity" name="billingCity"  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="New York"/>
                </div>
                <div id="el-lumpgdbh">
                  <label for="billingState"  className="block text-sm font-medium text-gray-700 mb-1" id="el-esduljbf">State *</label>
                  <select id="billingState" name="billingState"  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="" id="el-yabhu9qz">Select State</option>
                    <option value="AL" id="el-1t0t5umt">Alabama</option>
                    <option value="AK" id="el-rbuhrjkp">Alaska</option>
                    <option value="AZ" id="el-0xvs30oo">Arizona</option>
                    <option value="CA" id="el-oapz34bs">California</option>
                    <option value="FL" id="el-apphs3if">Florida</option>
                    <option value="NY" id="el-h2hd4joo">New York</option>
                    <option value="TX" id="el-j440rsl9">Texas</option>
                  </select>
                </div>
                <div id="el-4y7toffk">
                  <label for="billingZipCode"  className="block text-sm font-medium text-gray-700 mb-1" id="el-a658l8rn">ZIP Code *</label>
                  <input type="text" id="billingZipCode" name="billingZipCode"  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="10001"/>
                </div>
              </div>
            </div>
          </div>

           <div  className="mb-8" id="el-d2h65i73">
            <h3  className="text-lg font-semibold text-gray-900 mb-4" id="el-xjpdqcye">Special Instructions</h3>
            <div id="el-j7hherq6">
              <label for="instructions"  className="block text-sm font-medium text-gray-700 mb-1" id="el-1ail2wyu">Delivery Instructions (Optional)</label>
              <textarea id="instructions" name="instructions" rows="3"  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Leave package at front door, ring doorbell, etc."></textarea>
            </div>
          </div>
        </div>
}

export default page