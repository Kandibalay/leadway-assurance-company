// utils/emailTemplate.js

export const generateResetEmail = (user, resetLink) => {
  return `
    <div style="max-width:600px;margin:auto;font-family:sans-serif;padding:20px;border:1px solid #ddd;border-radius:8px;">
      <div style="text-align:center;">
        <img src="https://res.cloudinary.com/dqtppjttb/image/upload/v1751727621/Leadway_Assurance_Company_Limited_Logo_mpgwu7.png" alt="Leadway Logo" width="120" style="margin-bottom:20px;" />
        <h2 style="color:#333;margin-bottom:20px;">Reset Your Password</h2>
      </div>
      <p>Hello ${user.firstName},</p>
      <p>We received a request to reset your password. Click the button below to reset it:</p>
      <div style="text-align:center;margin:30px 0;">
        <a href="${resetLink}" 
           style="background:#000;color:#fff;padding:12px 24px;text-decoration:none;border-radius:5px;font-weight:bold;">
          Reset Password
        </a>
      </div>
      <p>If you did not request this, you can safely ignore this email.</p>
      <p style="margin-top:40px;">– Leadway Assurance Team</p>
    </div>
  `;
};

export const generateWelcomeEmail = (user) => {
  return `
    <div style="max-width:600px;margin:auto;font-family:sans-serif;padding:20px;border:1px solid #ddd;border-radius:8px;">
      <div style="text-align:center;">
        <img src="https://res.cloudinary.com/dqtppjttb/image/upload/v1751727621/Leadway_Assurance_Company_Limited_Logo_mpgwu7.png" alt="Leadway Logo" width="120" style="margin-bottom:20px;" />
        <h2 style="color:#004b8d;">Welcome to Leadway Assurance, ${user.firstName}!</h2>
      </div>
      <p>We're excited to have you onboard.</p>
      <p>You can now explore your dashboard and manage your insurance easily.</p>
      <p>If you have any questions, feel free to contact us.</p>
      <p style="margin-top:40px;">– Leadway Assurance Team</p>
    </div>
  `;
};
