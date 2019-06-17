package com.akshara.mathapp.utils;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.graphics.drawable.ColorDrawable;
import android.support.annotation.NonNull;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.ImageButton;
import android.widget.Toast;

import com.akshara.mathapp.R;
import com.akshara.mathapp.view.FontTextView;


public class MsgUtils {
    public static void displayToast(Context context, int messageStringReference) {
        if (context != null && context.getResources() != null) {
            Toast.makeText(context, messageStringReference, Toast.LENGTH_SHORT).show();
        }
    }

    public static void displayToast(Context context, String message) {
        if (context != null && context.getResources() != null) {
            Toast.makeText(context, message, Toast.LENGTH_SHORT).show();
        }
    }

    public static void displayToast(final Context context, String message, int duration) {
        if (context != null && context.getResources() != null) {
            final Toast toast = Toast.makeText(context, message, Toast.LENGTH_SHORT);
            toast.setDuration(duration);
            toast.show();
        }
    }

    public static void displayToast(final Context context, int messageStringReference, int duration) {
        if (context != null && context.getResources() != null) {
            final Toast toast = Toast.makeText(context, messageStringReference, Toast.LENGTH_SHORT);
            toast.setDuration(duration);
            toast.show();
        }
    }

    public static void displayToast(final Context context, int messageStringReference, int constant, int xposition, int yposition) {
        if (context != null && context.getResources() != null) {
            final Toast toast = Toast.makeText(context, messageStringReference, Toast.LENGTH_SHORT);
            toast.setGravity(constant, xposition, yposition);
            toast.show();
        }
    }

    public interface AlertDialogCallback {
        void onButtonClick(DialogInterface dialog, int id, int clickedButtonType);
    }

    public interface AlertDialogGenericObjectCallback {
        void onButtonClick(Object object);
    }

    /* Generic message dialog which shows the information and the button okay*/

    public static void displayMessageDialog(Context context, String title, String message, final AlertDialogCallback alertDialogCallback) {
        if (context != null && context.getResources() != null) {
            final AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder(context);
            if (title != null)
                alertDialogBuilder.setTitle(title);
            alertDialogBuilder.setMessage(message)
                    .setCancelable(false)
                    .setPositiveButton(R.string.button_text_okay, new DialogInterface.OnClickListener() {
                        public void onClick(DialogInterface dialog, int id) {
                            alertDialogCallback.onButtonClick(dialog, id, AppConstants.POSITIVE_BUTTON_CLICKED);
                        }
                    });

            AlertDialog alertDialog = alertDialogBuilder.create();
            alertDialog.show();
        }
    }

    /* Generic confirmation dialog with two options Yes or No (in icons) */

    public static void displayConfirmationDialog(Context context, String title, @NonNull String message, final AlertDialogCallback alertDialogCallback) {
        final AlertDialog dialog;
        final AlertDialog.Builder builder = new AlertDialog.Builder(context);
        final View alertView;

        LayoutInflater inflater = LayoutInflater.from(context);
        alertView = inflater.inflate(R.layout.layout_general_confirmation_dialog, null);
        builder.setView(alertView);

        FontTextView messageTextView = alertView.findViewById(R.id.message);
        messageTextView.setText(message);
        ImageButton positive = alertView.findViewById(R.id.positive);
        ImageButton negative = alertView.findViewById(R.id.negative);

        dialog = builder.create();

        positive.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                alertDialogCallback.onButtonClick(dialog, -1, AppConstants.POSITIVE_BUTTON_CLICKED);
                dialog.dismiss();
            }
        });

        negative.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                alertDialogCallback.onButtonClick(dialog, -1, AppConstants.NEGATIVE_BUTTON_CLICKED);
                dialog.dismiss();
            }
        });

        if (dialog.getWindow() != null)
            dialog.getWindow().setBackgroundDrawable(new ColorDrawable(android.graphics.Color.TRANSPARENT));
        dialog.show();
    }

    public static void displayAvatarSourceSelection(Context context, final AlertDialogCallback alertDialogCallback) {
        final AlertDialog dialog;
        final AlertDialog.Builder builder = new AlertDialog.Builder(context);
        final View alertView;

        LayoutInflater inflater = LayoutInflater.from(context);
        alertView = inflater.inflate(R.layout.layout_avatar_source_selection_dialog, null);
        builder.setView(alertView);

        final FontTextView gallery = alertView.findViewById(R.id.gallery);
        FontTextView camera = alertView.findViewById(R.id.camera);

        dialog = builder.create();

        gallery.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                alertDialogCallback.onButtonClick(dialog, -1, AppConstants.GALLERY_BUTTON_CLICKED);
                dialog.dismiss();

            }
        });

        camera.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                alertDialogCallback.onButtonClick(dialog, -1, AppConstants.CAMERA_BUTTON_CLICKED);
                dialog.dismiss();
            }
        });
        if (dialog.getWindow() != null)
            dialog.getWindow().setBackgroundDrawable(new ColorDrawable(android.graphics.Color.TRANSPARENT));
        dialog.show();
    }

}