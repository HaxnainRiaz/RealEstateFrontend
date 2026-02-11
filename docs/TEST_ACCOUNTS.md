# Test Accounts - Quick Access Guide

Use these pre-configured accounts to test different user roles and explore the platform's features.

---

## 🔐 Test Credentials

### Tenant Accounts

#### Account 1: Sarah Johnson (Active Applicant)
```
Email: tenant@demo.com
Password: password123
```
**Profile:**
- Name: Sarah Johnson
- Credit Score: 750
- Status: Verified
- Saved Properties: 2 properties
- Applications: 1 pending application
- Current Lease: None

**Use this account to test:**
- Browsing and saving properties
- Submitting rental applications
- Viewing application status
- Tenant dashboard features

---

#### Account 2: John Martinez (Current Tenant)
```
Email: john.tenant@demo.com
Password: password123
```
**Profile:**
- Name: John Martinez
- Credit Score: 720
- Status: Verified
- Saved Properties: 1 property
- Applications: None
- Current Lease: Active (Industrial Quarter)

**Use this account to test:**
- Active lease management
- Payment processing
- Maintenance requests
- Tenant portal with active rental

---

### Landlord Accounts

#### Account 1: Alexander Sterling (Established Landlord)
```
Email: landlord@demo.com
Password: password123
```
**Profile:**
- Name: Alexander Sterling
- Organization: Sterling Property Group
- Properties: 3 active listings
- Occupancy Rate: 94.2%
- Monthly Revenue: $16,900
- Compliance Score: 98

**Use this account to test:**
- Property management dashboard
- Viewing tenant applications
- Financial analytics
- Portfolio performance tracking
- Maintenance coordination

---

#### Account 2: Emily Chen (New Landlord)
```
Email: property.manager@demo.com
Password: password123
```
**Profile:**
- Name: Emily Chen
- Organization: Urban Living Properties LLC
- Properties: 0 (new account)
- Occupancy Rate: 0%
- Monthly Revenue: $0
- Compliance Score: 95

**Use this account to test:**
- New landlord onboarding
- Adding first property listing
- Empty state UI
- Getting started experience

---

## 🚀 Quick Start Guide

### 1. Access the Application
Navigate to: **http://localhost:3000** (or **http://localhost:3001** if port 3000 is in use)

### 2. Browse Without Login
- Click "Browse Properties" in the navigation
- View all property listings
- See full property details
- **No login required for browsing!**

### 3. Login to Test Portals

#### For Tenant Portal:
1. Click "Sign In" in navigation
2. Select "Tenant Portal"
3. Enter tenant credentials
4. Explore tenant dashboard and features

#### For Landlord Portal:
1. Click "Sign In" in navigation
2. Select "Landlord Terminal"
3. Enter landlord credentials
4. Explore property management features

---

## 🎯 Testing Scenarios

### Scenario 1: Property Discovery (No Auth)
1. Visit homepage
2. Click "Browse Properties"
3. Search and filter listings
4. Click on a property to view details
5. Try to "Apply" → Auth prompt appears ✅

### Scenario 2: Tenant Application Flow
1. Login as `tenant@demo.com`
2. Browse properties at `/listings`
3. Click "Apply for This Property"
4. Complete application wizard
5. View application status in dashboard

### Scenario 3: Landlord Property Management
1. Login as `landlord@demo.com`
2. Navigate to Landlord Dashboard
3. View portfolio analytics
4. Check tenant applications
5. Review financial reports

### Scenario 4: Active Tenant Experience
1. Login as `john.tenant@demo.com`
2. View active lease details
3. Make a payment
4. Submit maintenance request
5. Check payment history

### Scenario 5: New Landlord Onboarding
1. Login as `property.manager@demo.com`
2. See empty state dashboard
3. Click "Add Property"
4. Fill in listing details
5. Publish first property

---

## 📊 Available Properties (Mock Data)

All test accounts can interact with these properties:

1. **The Skyview Loft**
   - Location: 122 Greenwich St, NY
   - Price: $4,200/month
   - Type: 2 bed, 2 bath, 1,250 sqft
   - Status: Available

2. **Industrial Quarter**
   - Location: 45 Tech Plaza, Austin
   - Price: $3,850/month
   - Type: 1 bed, 1.5 bath, 950 sqft
   - Status: Available

3. **Central Park Suite**
   - Location: 15 CPW, Manhattan
   - Price: $8,900/month
   - Type: 3 bed, 3 bath, 2,200 sqft
   - Status: Available

---

## 🔄 Switching Between Accounts

### Quick Account Switch:
1. Click user avatar/menu in navigation
2. Select "Logout"
3. Login with different credentials
4. Explore different role perspectives

### Testing Role-Based Access:
- Try logging into Tenant Portal with landlord credentials → Error ❌
- Try logging into Landlord Portal with tenant credentials → Error ❌
- Each role has dedicated dashboards and features

---

## 💡 Tips for Testing

1. **Clear Browser Cache**: If you encounter issues, clear localStorage:
   ```javascript
   localStorage.clear()
   ```

2. **Test Responsive Design**: Resize browser to test mobile/tablet views

3. **Check Auth Guards**: Try accessing protected routes without login:
   - `/tenant/dashboard` → Redirects to login
   - `/landlord/dashboard` → Redirects to login

4. **Test Public Access**: Verify these work without auth:
   - `/` (Homepage)
   - `/listings` (Property listings)
   - `/listings/[id]` (Property details)
   - `/about`, `/pricing`, etc.

---

## 🐛 Troubleshooting

### Issue: "Invalid credentials"
- **Solution**: Double-check email and password (case-sensitive)
- **Verify**: Using correct portal (tenant vs landlord)

### Issue: "Port already in use"
- **Solution**: Stop other dev servers or use alternate port
- **Command**: `Stop-Process -Name node -Force` (PowerShell)

### Issue: Stale data after login
- **Solution**: Refresh the page or clear localStorage
- **Note**: Mock data persists in localStorage

### Issue: 404 errors
- **Solution**: Restart dev server with clean cache
- **Command**: Delete `.next` folder and run `npm run dev`

---

## 📝 Notes

- All passwords are `password123` for easy testing
- User data persists in localStorage (survives page refresh)
- Mock data is defined in `/lib/constants/mockData.js`
- Authentication logic is in `/lib/context/AuthContext.jsx`

---

## 🎨 UI/UX Features to Test

### Public Interface:
- ✅ Hero section with animations
- ✅ Property cards with hover effects
- ✅ Search and filter functionality
- ✅ Auth prompt modals

### Tenant Portal:
- ✅ Dashboard with saved properties
- ✅ Application tracking
- ✅ Payment management
- ✅ Maintenance requests
- ✅ Document vault

### Landlord Portal:
- ✅ Portfolio analytics
- ✅ Property management
- ✅ Tenant applications
- ✅ Financial reports
- ✅ Maintenance coordination

---

**Happy Testing! 🚀**

For questions or issues, check the main README or project documentation.
