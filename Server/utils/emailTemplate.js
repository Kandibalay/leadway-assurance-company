export const generateResetEmail = (user, resetLink) => {
  return `
    <div style="font-family:sans-serif;padding:20px;">
      <h2>Reset Your Password</h2>
      <p>Hello ${user.firstName},</p>
      <p>Click the link below to reset your password:</p>
      <a href="${resetLink}" style="color:#007bff;">Reset Password</a>
      <p>If you didn't request this, ignore the email.</p>
    </div>
  `;
};

export const generateWelcomeEmail = (user) => {
  return `
    <div style="font-family:sans-serif;padding:20px;">
      <h2>Welcome to Leadway Assurance</h2>
      <p>Hi ${user.firstName},</p>
      <p>Thank you for verifying your email and joining Leadway Assurance!</p>
      <p>We’re glad to have you with us.</p>
    </div>
  `;
};

export const generateVerifyEmail = (user, verifyUrl) => {
  return `
    <div style="font-family:sans-serif;padding:20px;">
      <h2>Email Verification</h2>
      <p>Hello ${user.firstName},</p>
      <p>Please verify your email by clicking the link below:</p>
      <a href="${verifyUrl}" style="color:#28a745;">Verify Email</a>
      <p>This link will expire in 24 hours.</p>
    </div>
  `;
};
